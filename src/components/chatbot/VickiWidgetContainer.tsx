import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import VickiTab from './VickiTab';
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
      {/* Mobile: Vicki Tab - always visible */}
      <div className="lg:hidden">
        <VickiTab isOpen={isWidgetOpen} onToggle={toggleWidget} />
      </div>

      {/* Desktop: Floating Icon when closed */}
      <div className="hidden lg:block">
        {!isWidgetOpen && (
          <button
            onClick={toggleWidget}
            className="fixed bottom-5 right-5 w-14 h-14 bg-gradient-to-r from-ath-clay to-ath-clay/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 z-[9998] flex items-center justify-center group"
            aria-label="Ask Vicki"
          >
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">V</span>
              </div>
            </div>
            <div className="absolute -top-12 right-0 bg-black text-white px-3 py-1 rounded-md text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              {t('vicki.askTitle')}
            </div>
          </button>
        )}
      </div>

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