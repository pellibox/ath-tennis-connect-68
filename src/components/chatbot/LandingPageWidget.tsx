
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const hiddenWidgetRef = useRef<HTMLDivElement>(null);

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
    if (hiddenWidgetRef.current) {
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement) {
        widgetElement.setAttribute('language', language || 'it');
      }
    }
  }, [language]);

  // Start the ElevenLabs call directly
  const startElevenLabsCall = () => {
    // First, make sure the widget is in the DOM but hidden via CSS
    if (hiddenWidgetRef.current) {
      // Small delay to ensure the widget is properly mounted
      setTimeout(() => {
        // Find the widget element and click its internal button
        const widgetElement = hiddenWidgetRef.current?.querySelector('elevenlabs-convai');
        if (widgetElement && widgetElement.shadowRoot) {
          // Try to find the start call button in the shadow DOM
          const startButton = widgetElement.shadowRoot.querySelector('button[aria-label="Start Call"]') || 
                              widgetElement.shadowRoot.querySelector('button.call-button') || 
                              widgetElement.shadowRoot.querySelector('button[class*="start-call"]');
          
          if (startButton instanceof HTMLElement) {
            startButton.click();
            console.log('Automatically starting ElevenLabs call');
          } else {
            console.error('Could not find the start call button in the ElevenLabs widget');
          }
        }
      }, 500);
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Button container */}
      <div onClick={startElevenLabsCall} className="relative rounded-full shadow-md flex items-center justify-center cursor-pointer w-full max-w-[200px] border border-white bg-transparent hover:bg-white/10 transition-all duration-300 px-0 mx-0 py-0">
        {/* White border button with phone icon and text */}
        <div className="flex items-center justify-center space-x-2 rounded-full py-3 px-6 w-full text-base">
          <Phone size={16} className="text-white" />
          <span className="text-white font-bold whitespace-nowrap">Chiedi a Vicki</span>
        </div>
      </div>
      
      {/* Hidden widget - not visible but still functional */}
      <div 
        ref={hiddenWidgetRef} 
        className="hidden" // Hide the widget completely
      >
        <elevenlabs-convai 
          agent-id={AGENT_ID} 
          language={language || 'it'}
        ></elevenlabs-convai>
      </div>
    </div>
  );
};

export default LandingPageWidget;
