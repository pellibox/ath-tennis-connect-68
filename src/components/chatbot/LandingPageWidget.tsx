
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);

  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        usePublicAgents: true // Use public agents mode
      });
      widgetInitialized.current = true;
      console.log("Landing page ElevenLabs widget initialized with language:", language);
    }
  }, [language]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Container with oval shape */}
      <div className="bg-white rounded-full px-4 py-2 mb-1 shadow-md">
        <p className="text-ath-clay text-sm font-bold">Chiedi a Vicki</p>
      </div>
      
      <div ref={widgetRef} className="elevenlabs-widget-container max-w-[350px]">
        <elevenlabs-convai agent-id={AGENT_ID} language={language || 'it'} className="py-0 my-0"></elevenlabs-convai>
      </div>
      
      <div className="mt-2 text-white text-xs opacity-70">
        Powered by ElevenLabs
      </div>
    </div>
  );
};

export default LandingPageWidget;
