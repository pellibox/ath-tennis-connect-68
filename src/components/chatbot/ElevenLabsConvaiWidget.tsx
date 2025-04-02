
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, ChevronUp } from 'lucide-react';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const ElevenLabsConvaiWidget = () => {
  const { language } = useLanguage();
  const widgetRef = useRef<HTMLElement>(null);
  const widgetInitialized = useRef(false);
  const [expanded, setExpanded] = useState(false);
  
  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };
  
  // Initialize the widget when the component mounts or language changes
  useEffect(() => {
    if (expanded && window.ElevenLabsConvai && !widgetInitialized.current) {
      // Only initialize when expanded
      window.ElevenLabsConvai.init({
        language: language || 'it', // Default to Italian if no language is set
        usePublicAgents: true // Use public agents mode
      });
      
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);
    }
  }, [language, expanded]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);

  return (
    <div className="fixed bottom-16 right-4 z-50 md:bottom-5">
      {expanded ? (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px] animate-fade-in">
          <div 
            className="bg-ath-clay text-white px-3 py-2 cursor-pointer flex items-center justify-between"
            onClick={toggleExpanded}
          >
            <span className="text-xs font-light">Assistente ATH AI</span>
            <ChevronUp size={16} className="ml-2" />
          </div>
          <div className="elevenlabs-widget-container max-h-[500px] max-w-[350px]">
            <elevenlabs-convai 
              ref={widgetRef}
              agent-id={AGENT_ID}
              language={language || 'it'}
            ></elevenlabs-convai>
          </div>
        </div>
      ) : (
        <div 
          className="bg-ath-clay rounded-full p-2 shadow-md cursor-pointer flex justify-center items-center transition-all duration-200"
          onClick={toggleExpanded}
        >
          <div className="relative">
            <MessageCircle size={20} className="text-white" />
            <ChevronUp size={14} className="absolute -top-1 -right-1 text-white animate-bounce opacity-70" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ElevenLabsConvaiWidget;
