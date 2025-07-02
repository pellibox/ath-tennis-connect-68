import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ElevenLabsConvaiWidget from './ElevenLabsConvaiWidget';

// Custom event for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';

const VickiWidgetContainer = () => {
  const { t } = useLanguage();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);

  const toggleWidget = () => {
    if (!isWidgetOpen) {
      // When opening this widget, dispatch event to close other widgets
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, { detail: { widget: 'vicki' } });
      window.dispatchEvent(event);
    }
    setIsWidgetOpen(prev => !prev);
  };

  // Listen for toggle events from other widgets
  useEffect(() => {
    const handleWidgetToggle = (event: CustomEvent) => {
      // If another widget is opening and this one is open, close this one
      if (event.detail.widget !== 'vicki' && isWidgetOpen) {
        setIsWidgetOpen(false);
      }
    };

    window.addEventListener(WIDGET_TOGGLE_EVENT, handleWidgetToggle as EventListener);

    return () => {
      window.removeEventListener(WIDGET_TOGGLE_EVENT, handleWidgetToggle as EventListener);
    };
  }, [isWidgetOpen]);

  return (
    <>
      {/* Unified Vicki Button - same design for all versions */}
      {!isWidgetOpen && (
        <button
          onClick={toggleWidget}
          className="fixed z-[9998] bg-gradient-to-r from-ath-clay to-ath-clay/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 px-6 py-3 lg:bottom-5 lg:right-5 bottom-[calc(70px+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto"
          aria-label={t('vicki.askTitle')}
        >
          {/* Vicki icon */}
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-black text-sm font-bold">V</span>
          </div>
          
          {/* Text */}
          <span className="text-white text-sm font-medium whitespace-nowrap">
            {t('vicki.askTitle')}
          </span>
          
          {/* Status indicator */}
          <div className="w-3 h-3 bg-green-400 rounded-full flex-shrink-0" />
        </button>
      )}

      {/* ElevenLabs Widget - shown/hidden based on state */}
      <div 
        className={`transition-all duration-300 ${
          isWidgetOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ElevenLabsConvaiWidget isOpen={isWidgetOpen} onClose={() => setIsWidgetOpen(false)} />
      </div>
    </>
  );
};

export default VickiWidgetContainer;