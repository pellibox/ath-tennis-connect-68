
import React, { createContext, useContext, useState, useEffect } from 'react';
import { en } from '../translations/en';
import { it } from '../translations/it';
import { fr } from '../translations/fr';
import { de } from '../translations/de';

type Language = 'en' | 'it' | 'fr' | 'de';

// Updated type to handle deeply nested translation objects (up to 3 levels)
type NestedStringRecord = Record<string, string>;
type DeepNestedStringRecord = Record<string, string | NestedStringRecord>;
type TranslationsObject = Record<string, string | DeepNestedStringRecord | Record<string, DeepNestedStringRecord>>;

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translationsMap: Record<Language, TranslationsObject> = {
  en,
  it,
  fr,
  de
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
  
  const [translations, setTranslations] = useState<TranslationsObject>(translationsMap[language] || translationsMap.it);

  // Load translations when language changes
  useEffect(() => {
    console.log('Language changed to:', language);
    console.log('Loading translations for:', language);
    
    // Force immediate update of translations
    setTranslations({...translationsMap[language]});
    
    // Save language preference to localStorage
    localStorage.setItem('language', language);
    
    // Force a re-render of components using translations
    document.documentElement.setAttribute('lang', language);
    
  }, [language]);

  // Updated translation function to handle deeply nested objects
  const t = (key: string): string => {
    const keys = key.split('.');
    let result: any = translations;
    
    // Navigate through the nested object
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if translation not found
      }
    }
    
    return typeof result === 'string' ? result : key;
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
