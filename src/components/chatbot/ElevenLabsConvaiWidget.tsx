
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// Create a custom event name for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const ElevenLabsConvaiWidget = () => {
  const { language } = useLanguage();
  const widgetRef = useRef<HTMLElement>(null);
  const widgetInitialized = useRef(false);
  
  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it', // Default to Italian if no language is set
        usePublicAgents: true // Use public agents mode
      });
      
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);
      
      // Dispatch an event to close other widgets
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, { detail: { widget: 'elevenlabs' } });
      window.dispatchEvent(event);
    }
  }, [language]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  return (
    <div className="fixed bottom-5 right-4 z-50">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px] animate-fade-in">
        <div className="bg-ath-clay text-white px-3 py-2">
          {/* Removed the text "Assistente ATH AI" */}
        </div>
        <div className="elevenlabs-widget-container max-h-[500px] max-w-[350px]">
          <elevenlabs-convai 
            ref={widgetRef}
            agent-id={AGENT_ID}
            language={language || 'it'}
          ></elevenlabs-convai>
        </div>
      </div>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
