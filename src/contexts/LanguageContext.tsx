
import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import enTranslations from '../translations/en';
import itTranslations from '../translations/it';
import frTranslations from '../translations/fr';
import deTranslations from '../translations/de';

type Language = 'en' | 'it' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  isLoading: boolean;
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
  t: (key) => key,
  isLoading: true
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Default language is Italian
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['en', 'it', 'fr', 'de'].includes(savedLanguage) ? savedLanguage : 'it';
  });
  
  const [translations, setTranslations] = useState<Record<string, string>>(translationsMap[language] || translationsMap.it);
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    console.log('Language changed to:', language);
    console.log('Loading translations for:', language);
    
    setIsLoading(true);
    
    // Force immediate update of translations
    if (translationsMap[language]) {
      setTranslations({...translationsMap[language]});
    } else {
      console.error(`No translations found for language: ${language}`);
      setTranslations({...translationsMap['it']});
    }
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Force a re-render of components using translations
    document.documentElement.setAttribute('lang', language);
    
    // Use a small timeout to ensure translations are loaded
    setTimeout(() => {
      setIsLoading(false);
    }, 10);
    
  }, [language]);

  // Translation function with fallback - memoized for performance
  const t = useMemo(() => {
    return (key: string): string => {
      if (isLoading) {
        // During loading, try to get a value from the initial translations
        if (translationsMap[language] && translationsMap[language][key]) {
          return translationsMap[language][key];
        }
        
        // If not found in current language, try Italian as fallback
        if (translationsMap['it'] && translationsMap['it'][key]) {
          return translationsMap['it'][key];
        }
        
        // Last resort fallback
        return key;
      }
      
      // Normal operation after loading
      const translatedText = translations[key];
      if (translatedText === undefined) {
        console.warn(`Translation missing for key: "${key}" in language: ${language}`);
        return key; // Return the key as fallback
      }
      return translatedText;
    };
  }, [translations, language, isLoading]);

  const contextValue = useMemo(() => ({
    language,
    setLanguage,
    t,
    isLoading
  }), [language, t, isLoading]);

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  
  if (context === undefined) {
    console.error('useLanguage must be used within a LanguageProvider');
    return {
      language: 'it',
      setLanguage: () => {},
      t: (key) => key,
      isLoading: true
    };
  }
  
  return context;
};
