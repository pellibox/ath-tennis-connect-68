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
      {/* Unified Vicki Icon - both mobile and desktop */}
      {!isWidgetOpen && (
        <button
          onClick={toggleWidget}
          className="fixed z-[9998] bg-gradient-to-r from-ath-clay to-ath-clay/80 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center group lg:rounded-full rounded-full lg:bottom-5 lg:right-5 lg:w-14 lg:h-14 bottom-[calc(70px+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 lg:translate-x-0 h-12 px-4 lg:px-0"
          aria-label={t('vicki.askTitle')}
        >
          {/* Mobile version - pill shape with text and icon */}
          <div className="lg:hidden flex items-center gap-2">
            <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-[8px] font-bold">V</span>
              </div>
            </div>
            <span className="text-white text-sm font-medium">
              {t('vicki.askTitle')}
            </span>
            <div className="w-2 h-2 bg-green-400 rounded-full" />
          </div>
          
          {/* Desktop version - circular icon only */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
            </div>
            {/* Tooltip for desktop */}
            <div className="absolute -top-12 right-0 bg-black text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {t('vicki.askTitle')}
            </div>
          </div>
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