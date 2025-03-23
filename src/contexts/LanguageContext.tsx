
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

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default language is Italian
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['en', 'it', 'fr', 'de'].includes(savedLanguage) ? savedLanguage : 'it';
  });
  
  const [translations, setTranslations] = useState<Record<string, string>>({});

  // Load translations when component mounts and when language changes
  useEffect(() => {
    console.log('Language changed to:', language);
    
    if (!translationsMap[language]) {
      console.error(`No translations found for language: ${language}`);
      return;
    }
    
    // Force immediate update of translations
    setTranslations(translationsMap[language]);
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Force a re-render of components using translations
    document.documentElement.setAttribute('lang', language);
    
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    if (!translations[key]) {
      console.warn(`Translation missing for key: "${key}" in language: ${language}`);
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
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
