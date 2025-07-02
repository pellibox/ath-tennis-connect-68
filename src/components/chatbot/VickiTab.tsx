import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils';

interface VickiTabProps {
  isOpen: boolean;
  onToggle: () => void;
}

const VickiTab = ({ isOpen, onToggle }: VickiTabProps) => {
  const { t } = useLanguage();
  
  return (
    <button
      onClick={onToggle}
      className={cn(
        "fixed bottom-[calc(60px+env(safe-area-inset-bottom,0px))] left-1/2 transform -translate-x-1/2",
        "bg-gradient-to-r from-ath-clay to-ath-clay/80",
        "text-white px-6 py-3 rounded-t-2xl shadow-lg",
        "flex items-center gap-3 transition-all duration-300",
        "hover:shadow-xl hover:scale-105 active:scale-95",
        "z-[9998] font-swiss font-medium",
        isOpen ? "translate-y-0" : "translate-y-0"
      )}
      aria-label={t('vicki.askTitle')}
    >
      {/* Vicki Logo */}
      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
          <span className="text-white text-[8px] font-bold">V</span>
        </div>
      </div>
      
      {/* Tab Text */}
      <span className="text-sm font-medium tracking-wide">
        {t('vicki.askTitle')}
      </span>
      
      {/* Visual indicator */}
      <div className={cn(
        "w-2 h-2 rounded-full transition-colors duration-200",
        isOpen ? "bg-green-400" : "bg-white/60"
      )} />
    </button>
  );
};

export default VickiTab;