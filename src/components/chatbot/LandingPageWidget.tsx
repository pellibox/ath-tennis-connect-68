import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";
const LandingPageWidget = () => {
  const {
    language
  } = useLanguage();
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

  // Toggle widget visibility and initialize call
  const toggleWidget = () => {
    setIsWidgetVisible(prev => {
      const newState = !prev;

      // If opening the widget, trigger the call after a short delay to ensure widget is rendered
      if (newState) {
        setTimeout(() => {
          // Find the widget element and click its internal button if available
          const widgetElement = document.querySelector('elevenlabs-convai');
          if (widgetElement && widgetElement.shadowRoot) {
            // Try to find the start call button in the shadow DOM
            const startButton = widgetElement.shadowRoot.querySelector('button[aria-label="Start Call"]') || widgetElement.shadowRoot.querySelector('button.call-button') || widgetElement.shadowRoot.querySelector('button[class*="start-call"]');
            if (startButton instanceof HTMLElement) {
              startButton.click();
              console.log('Automatically starting ElevenLabs call');
            }
          }
        }, 500);
      }
      return newState;
    });
  };
  return <div className="w-full flex flex-col items-center mt-8">
      {/* Button container */}
      <div onClick={toggleWidget} className="relative shadow-md flex items-center justify-center cursor-pointer w-full max-w-[200px] border border-white bg-transparent hover:bg-white/10 transition-all duration-300 mx-0 my-0 py-0 px-0 rounded-sm">
        {/* White border button with phone icon and text */}
        <div className="flex items-center justify-center space-x-2 rounded-full w-full text-base py-[11px] px-[29px]">
          <Phone size={16} className="text-white" />
          <span className="text-white font-bold whitespace-nowrap">Chiedi a Vicki</span>
        </div>
      </div>
      
      {isWidgetVisible && <div ref={widgetRef} className="elevenlabs-widget-container max-w-[350px] mt-4 animate-fade-in">
          <elevenlabs-convai agent-id={AGENT_ID} language={language || 'it'} className="py-0 my-0"></elevenlabs-convai>
        </div>}
    </div>;
};
export default LandingPageWidget;