
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

// Create a custom event name for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

// Increase the bottom position values to avoid overlap with the footer login section
const MOBILE_BOTTOM_POSITION = '180px'; // Increased from 140px
const DESKTOP_BOTTOM_POSITION = '80px'; // Increased from 20px

const ElevenLabsConvaiWidget = () => {
  const { language, t } = useLanguage();
  const widgetRef = useRef<HTMLElement>(null);
  const widgetInitialized = useRef(false);
  const isMobile = useIsMobile();
  const [bottomPosition, setBottomPosition] = useState(isMobile ? MOBILE_BOTTOM_POSITION : DESKTOP_BOTTOM_POSITION);

  // Update position when mobile state changes
  useEffect(() => {
    setBottomPosition(isMobile ? MOBILE_BOTTOM_POSITION : DESKTOP_BOTTOM_POSITION);
    console.log("Mobile state changed:", isMobile, "Setting bottom to:", isMobile ? MOBILE_BOTTOM_POSITION : DESKTOP_BOTTOM_POSITION);
  }, [isMobile]);

  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        // Default to Italian if no language is set
        usePublicAgents: true // Use public agents mode
      });
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);

      // Dispatch an event to close other widgets
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, {
        detail: {
          widget: 'elevenlabs'
        }
      });
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
    <div 
      className="fixed right-4 z-50" 
      style={{ bottom: bottomPosition }}
    >
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out max-w-[350px] animate-fade-in">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="elevenlabs-widget-container max-h-[500px] max-w-[350px]">
                <elevenlabs-convai 
                  ref={widgetRef} 
                  agent-id={AGENT_ID} 
                  language={language || 'it'}
                ></elevenlabs-convai>
              </div>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>{t('chatbot.askCoach')}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
