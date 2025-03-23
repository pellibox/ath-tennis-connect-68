
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

const LanguageSwitcher = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Map language code to display name
  const languageNames: Record<string, string> = {
    en: t('language.en'),
    it: t('language.it'),
    fr: t('language.fr'),
    de: t('language.de')
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center text-sm font-medium hover:text-gray-600 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} className="mr-1" />
        <span className="hidden md:inline-block">{languageNames[language]}</span>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-md py-1 z-50">
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">
            {t('language')}
          </div>
          {(['en', 'it', 'fr', 'de'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setLanguage(lang);
                setIsOpen(false);
              }}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                language === lang ? "font-medium text-purple-600 bg-purple-50" : "text-gray-700"
              )}
            >
              {languageNames[lang]}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
