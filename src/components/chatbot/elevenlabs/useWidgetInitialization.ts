
import { useState, useRef, useEffect } from 'react';

interface UseWidgetInitializationProps {
  scriptLoaded: boolean;
  apiKeyLoaded: boolean;
  hasApiKey: boolean;
  apiKeyError: boolean;
  isDevelopmentMode: boolean;
  AGENT_ID: string;
}

const MAX_INIT_ATTEMPTS = 5;

export const useWidgetInitialization = ({
  scriptLoaded,
  apiKeyLoaded,
  hasApiKey,
  apiKeyError,
  isDevelopmentMode,
  AGENT_ID
}: UseWidgetInitializationProps) => {
  const hiddenWidgetRef = useRef<HTMLDivElement>(null);
  const [initAttempt, setInitAttempt] = useState(0);
  const widgetInitialized = useRef(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [callActive, setCallActive] = useState(false);
  
  useEffect(() => {
    if (!scriptLoaded || !apiKeyLoaded) return;
    
    const initializeWidget = async () => {
      try {
        if (window.ElevenLabsConvai && !widgetInitialized.current) {
          console.log("Initializing ElevenLabs widget");
          
          const usePublicMode = !hasApiKey || apiKeyError || isDevelopmentMode;
          console.log("Using public agents mode:", usePublicMode);
          
          const attemptInit = (attempt = 0) => {
            try {
              window.ElevenLabsConvai.init({
                language: 'it',
                usePublicAgents: true
              });
              widgetInitialized.current = true;
              console.log("ElevenLabs widget initialized successfully");
            } catch (error) {
              console.error(`Widget initialization failed (attempt ${attempt}):`, error);
              
              if (attempt < 3) {
                const delay = Math.pow(2, attempt) * 1000;
                console.log(`Retrying initialization in ${delay}ms`);
                setTimeout(() => attemptInit(attempt + 1), delay);
              }
            }
          };
          
          attemptInit();
        } else if (!window.ElevenLabsConvai && initAttempt < MAX_INIT_ATTEMPTS) {
          console.log(`ElevenLabs API not found. Attempt ${initAttempt + 1}/${MAX_INIT_ATTEMPTS}`);
          
          setTimeout(() => {
            setInitAttempt(prev => prev + 1);
          }, Math.pow(2, initAttempt) * 1000);
        } else if (!window.ElevenLabsConvai && initAttempt >= MAX_INIT_ATTEMPTS) {
          console.error("Failed to find ElevenLabs API after multiple attempts");
        }
      } catch (error) {
        console.error("Unexpected error during widget initialization:", error);
      }
    };

    initializeWidget();
  }, [scriptLoaded, apiKeyLoaded, hasApiKey, apiKeyError, isDevelopmentMode, initAttempt]);

  useEffect(() => {
    if (initAttempt > 0 && scriptLoaded) {
      if (hiddenWidgetRef.current) {
        let widget = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
        
        if (!widget) {
          console.log("Creating widget element");
          const elevenlabsWidget = document.createElement('elevenlabs-convai');
          elevenlabsWidget.setAttribute('agent-id', AGENT_ID);
          elevenlabsWidget.setAttribute('language', 'it');
          hiddenWidgetRef.current.appendChild(elevenlabsWidget);
        }
      }
    }
  }, [initAttempt, scriptLoaded, AGENT_ID]);

  return {
    hiddenWidgetRef,
    initAttempt,
    buttonClicked,
    setButtonClicked,
    callActive,
    setCallActive,
    widgetInitialized
  };
};
