
import React, { useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { 
  Tooltip, 
  TooltipContent, 
  TooltipProvider, 
  TooltipTrigger 
} from '@/components/ui/tooltip';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

interface ElevenLabsConvaiWidgetProps {
  isOpen?: boolean;
}

const ElevenLabsConvaiWidget = ({ isOpen = true }: ElevenLabsConvaiWidgetProps) => {
  const { language, t } = useLanguage();
  const widgetRef = useRef<HTMLDivElement>(null);
  const widgetInitialized = useRef(false);
  const isMobile = useIsMobile();


  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current && isOpen) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        usePublicAgents: true
      });
      widgetInitialized.current = true;
      console.log("ElevenLabs Convai widget initialized with language:", language);
    }
  }, [language, isOpen]);

  // Update the language attribute when language changes
  useEffect(() => {
    if (widgetRef.current) {
      widgetRef.current.setAttribute('language', language || 'it');
    }
  }, [language]);
  
  
  if (!isOpen) return null;

  return (
    <div 
      ref={widgetRef}
      className={`
        fixed z-[9997] transition-all duration-300
        ${isMobile 
          ? 'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] max-w-[350px]' 
          : 'bottom-5 right-5 w-[350px]'
        }
      `}
    >
      <div className="bg-white rounded-lg shadow-2xl overflow-hidden max-h-[80vh] animate-fade-in">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className="elevenlabs-widget-container">
                <elevenlabs-convai 
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
