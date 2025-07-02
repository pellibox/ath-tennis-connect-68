import React, { useState, useEffect } from 'react';
import VickiTab from './VickiTab';
import ElevenLabsConvaiWidget from './ElevenLabsConvaiWidget';

// Custom event for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';

const VickiWidgetContainer = () => {
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
      {/* Vicki Tab - always visible on mobile */}
      <div className="lg:hidden">
        <VickiTab isOpen={isWidgetOpen} onToggle={toggleWidget} />
      </div>

      {/* ElevenLabs Widget - shown/hidden based on tab state */}
      <div 
        className={`transition-all duration-300 ${
          isWidgetOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <ElevenLabsConvaiWidget isOpen={isWidgetOpen} />
      </div>
    </>
  );
};

export default VickiWidgetContainer;