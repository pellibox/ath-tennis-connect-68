
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const [isWidgetVisible, setIsWidgetVisible] = useState(false);

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

  // Toggle widget visibility
  const toggleWidget = () => {
    setIsWidgetVisible(prev => !prev);
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Button container */}
      <div 
        className="relative rounded-full py-3 shadow-md flex items-center justify-center cursor-pointer w-full max-w-[200px]"
        onClick={toggleWidget}
      >
        {/* Black pill button with phone icon and text */}
        <div className="flex items-center justify-center space-x-2 bg-black rounded-full py-2 px-4 w-full">
          <Phone size={18} className="text-white" />
          <span className="text-white font-bold text-base whitespace-nowrap">Chiedi a Vicki</span>
        </div>
      </div>
      
      <div 
        ref={widgetRef} 
        className={`elevenlabs-widget-container max-w-[350px] transition-all duration-300 ${isWidgetVisible ? 'block mt-4' : 'hidden'}`}
      >
        <elevenlabs-convai agent-id={AGENT_ID} language={language || 'it'} className="py-0 my-0"></elevenlabs-convai>
      </div>
    </div>
  );
};

export default LandingPageWidget;
