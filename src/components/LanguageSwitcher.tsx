
import { Globe } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { toast } from '@/components/ui/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';

const LanguageSwitcher = () => {
  const { language, setLanguage, t, isLoading } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const [languageNames, setLanguageNames] = useState<Record<string, string>>({});

  // Update language names when language changes
  useEffect(() => {
    if (!isLoading) {
      setLanguageNames({
        en: t('language.en'),
        it: t('language.it'),
        fr: t('language.fr'),
        de: t('language.de')
      });
    }
  }, [t, isLoading, language]);

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

  const handleLanguageChange = (newLanguage: 'en' | 'it' | 'fr' | 'de') => {
    console.log('Changing language to:', newLanguage);
    setLanguage(newLanguage);
    toast({
      title: t('language.changed'),
      description: t('language.updated'),
    });
    setIsOpen(false);
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
        <span className={isMobile ? "" : "hidden md:inline-block"}>
          {!isLoading && languageNames[language] ? languageNames[language] : language.toUpperCase()}
        </span>
      </button>
      
      {isOpen && (
        <div className={cn(
          "absolute mt-2 bg-white shadow-md rounded-md py-1 z-50",
          isMobile ? "left-0 w-48" : "right-0 w-40"
        )}>
          <div className="px-3 py-2 text-xs font-semibold text-gray-500 border-b border-gray-100">
            {t('language')}
          </div>
          {(['en', 'it', 'fr', 'de'] as const).map((lang) => (
            <button
              key={lang}
              onClick={() => handleLanguageChange(lang)}
              className={cn(
                "block w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors",
                language === lang ? "font-medium text-purple-600 bg-purple-50" : "text-gray-700"
              )}
            >
              {!isLoading && languageNames[lang] ? languageNames[lang] : lang.toUpperCase()}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
