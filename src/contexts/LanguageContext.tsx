
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

const translationsMap = {
  en: enTranslations,
  it: itTranslations,
  fr: frTranslations,
  de: deTranslations
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Get language from localStorage or default to English
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    return savedLanguage && ['en', 'it', 'fr', 'de'].includes(savedLanguage) ? savedLanguage : 'en';
  });
  
  const [translations, setTranslations] = useState(translationsMap.en);

  // Load translations when language changes
  useEffect(() => {
    setTranslations(translationsMap[language] || translationsMap.en);
    // Save language preference to localStorage
    localStorage.setItem('language', language);
  }, [language]);

  // Translation function
  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
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
