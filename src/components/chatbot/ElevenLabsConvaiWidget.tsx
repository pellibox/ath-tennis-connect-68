
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const ElevenLabsConvaiWidget = () => {
  const { language } = useLanguage();
  const widgetRef = useRef<HTMLElement>(null);
  const widgetInitialized = useRef(false);
  
  // Initialize the widget when the component mounts or language changes
  useEffect(() => {
    // Check if the global ElevenLabs object exists
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      // Initialize the ElevenLabs Convai widget
      window.ElevenLabsConvai.init({
        language: language || 'it', // Default to Italian if no language is set
        usePublicAgents: true // Use public agents mode
      });
      
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);
    }
  }, [language]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  return (
    <div className="elevenlabs-widget-container fixed bottom-16 right-4 z-50 max-w-[400px] max-h-[600px]">
      <elevenlabs-convai 
        ref={widgetRef}
        agent-id={AGENT_ID}
        language={language || 'it'}
      ></elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
