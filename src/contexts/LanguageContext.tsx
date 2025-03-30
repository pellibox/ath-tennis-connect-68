
import React, { createContext, useContext, useState, useEffect } from 'react';
import enTranslations from '../translations/en';
import itTranslations from '../translations/it';
import frTranslations from '../translations/fr';
import deTranslations from '../translations/de';

type Language = 'en' | 'it' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translationsMap: Record<Language, Record<string, string>> = {
  en: enTranslations,
  it: itTranslations,
  fr: frTranslations,
  de: deTranslations
};

// Create the context with a default value to avoid the undefined check
const LanguageContext = createContext<LanguageContextType>({
  language: 'it', 
  setLanguage: () => {}, 
  t: (key) => key
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default language is Italian
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['en', 'it', 'fr', 'de'].includes(savedLanguage) ? savedLanguage : 'it';
  });
  
  const [translations, setTranslations] = useState<Record<string, string>>(translationsMap[language] || translationsMap.it);

  // Load translations when language changes
  useEffect(() => {
    console.log('Language changed to:', language);
    
    // Force immediate update of translations
    setTranslations({...translationsMap[language]});
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Force a re-render of components using translations
    document.documentElement.setAttribute('lang', language);
    
  }, [language]);

  // Translation function with better error handling
  const t = (key: string): string => {
    if (!key) return '';
    if (!translations[key]) {
      console.warn(`Translation key not found: "${key}" for language ${language}`);
      // Try to find it in English as fallback
      if (language !== 'en' && translationsMap.en[key]) {
        return translationsMap.en[key];
      }
      return key;
    }
    return translations[key];
  };

  const contextValue = {
    language,
    setLanguage,
    t
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  return context;
};
