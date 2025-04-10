import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { GiArtificialIntelligence } from "react-icons/gi";
import { XCircle } from "lucide-react";

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const hiddenWidgetRef = useRef<HTMLDivElement>(null);
  const [initAttempt, setInitAttempt] = useState(0);
  const widgetInitialized = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        usePublicAgents: true
      });
      widgetInitialized.current = true;
      console.log("ElevenLabs widget initialized with language:", language);
    }
  }, [language]);

  useEffect(() => {
    const checkConnectionStatus = () => {
      if (!hiddenWidgetRef.current) return;
      
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement && widgetElement.shadowRoot) {
        const activeCallIndicators = widgetElement.shadowRoot.querySelectorAll('.active-call, .call-active, [data-status="connected"]');
        const errorElements = widgetElement.shadowRoot.querySelectorAll('.error-state, .connection-error, [data-status="error"]');
        
        setCallActive(activeCallIndicators.length > 0);
        setConnectionError(errorElements.length > 0);
        
        if (activeCallIndicators.length > 0) {
          console.log("ElevenLabs connection appears to be active");
        }
        
        if (errorElements.length > 0) {
          console.error("ElevenLabs connection appears to have an error");
          toast({
            title: "Errore di connessione",
            description: "Si è verificato un problema con la connessione. Riprova più tardi.",
            variant: "destructive"
          });
          setIsLoading(false);
          setButtonClicked(false);
        }
      }
    };
    
    const connectionCheckInterval = setInterval(checkConnectionStatus, 1000);
    
    return () => clearInterval(connectionCheckInterval);
  }, []);

  useEffect(() => {
    if (hiddenWidgetRef.current) {
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement) {
        widgetElement.setAttribute('language', language || 'it');
      }
    }
  }, [language]);
  
  const stopElevenLabsCall = () => {
    console.log("Attempting to stop ElevenLabs call...");
    
    if (!hiddenWidgetRef.current) return;
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (widgetElement && widgetElement.shadowRoot) {
      const stopButtons = widgetElement.shadowRoot.querySelectorAll('button[aria-label="Close"], button[aria-label="Stop"], button[class*="close"], button[class*="stop"]');
      
      let buttonClicked = false;
      stopButtons.forEach((button) => {
        if (button instanceof HTMLElement) {
          console.log("Found stop button:", button);
          button.click();
          buttonClicked = true;
        }
      });
      
      if (!buttonClicked) {
        console.log("Could not find stop button, trying to reset the widget");
        if (hiddenWidgetRef.current.contains(widgetElement)) {
          hiddenWidgetRef.current.removeChild(widgetElement);
          
          setButtonClicked(false);
          setCallActive(false);
          widgetInitialized.current = false;
          
          setTimeout(() => {
            if (window.ElevenLabsConvai) {
              window.ElevenLabsConvai.init({
                language: language || 'it',
                usePublicAgents: true
              });
              widgetInitialized.current = true;
            }
          }, 500);
        }
      }
    }
  };
  
  const startElevenLabsCall = () => {
    if (callActive) {
      stopElevenLabsCall();
      return;
    }
    
    console.log("Attempting to start ElevenLabs call...");
    setIsLoading(true);
    setButtonClicked(true);
    
    setInitAttempt(prev => prev + 1);
    
    if (!hiddenWidgetRef.current) {
      console.error("Widget reference is not available yet");
      toast({
        title: "Errore",
        description: "Impossibile avviare la chiamata. Riprova tra qualche secondo.",
        variant: "destructive"
      });
      setIsLoading(false);
      setButtonClicked(false);
      return;
    }
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (!widgetElement) {
      console.error("Could not find the ElevenLabs widget element");
      setIsLoading(false);
      setButtonClicked(false);
      return;
    }
    
    console.log("Found widget element:", widgetElement);
    
    const tryClickButton = () => {
      if (!widgetElement.shadowRoot) {
        console.log("Widget has no shadowRoot, trying again in 1 second...");
        setTimeout(tryClickButton, 1000);
        return;
      }
      
      console.log("Shadow root found, looking for button...");
      
      const startCallButton = widgetElement.shadowRoot.querySelector('button[title="Chiedi a Vicki"]');
      if (startCallButton && startCallButton instanceof HTMLElement) {
        console.log("Found start call button by title:", startCallButton);
        startCallButton.click();
        console.log("Start call button clicked by title!");
        setIsLoading(false);
        setCallActive(true);
        return;
      }
      
      const buttonSelectors = [
        'button[aria-label="Start Call"]',
        'button.call-button',
        'button[class*="start-call"]',
        'button[class*="call"]',
        'button:not([aria-label="Close"])',
        'button'
      ];
      
      const allButtons = widgetElement.shadowRoot.querySelectorAll('button');
      console.log(`Found ${allButtons.length} buttons in the shadow DOM`);
      allButtons.forEach((button, buttonIndex) => {
        console.log(`Button ${buttonIndex}:`, button.outerHTML);
      });
      
      let buttonClicked = false;
      for (const selector of buttonSelectors) {
        const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
        console.log(`Selector '${selector}' found ${buttons.length} elements`);
        
        buttons.forEach((button, buttonIndex) => {
          if (buttonIndex > 1 && button instanceof HTMLElement && 
              !button.getAttribute('aria-label')?.includes('Close') && 
              !button.classList.contains('close')) {
            console.log("Found potential start button:", button);
            button.click();
            console.log("Button clicked!");
            buttonClicked = true;
            setIsLoading(false);
            setCallActive(true);
          }
        });
        
        if (buttonClicked) break;
      }
      
      if (!buttonClicked) {
        console.error("Could not find any suitable button to click");
        const clickableElements = widgetElement.shadowRoot.querySelectorAll('[role="button"], a, button');
        for (const element of clickableElements) {
          if (element instanceof HTMLElement) {
            console.log("Trying to click alternative element:", element);
            element.click();
            buttonClicked = true;
            setIsLoading(false);
            setCallActive(true);
            break;
          }
        }
        
        if (!buttonClicked) {
          toast({
            title: "Errore",
            description: "Impossibile avviare la chiamata. Riprova più tardi.",
            variant: "destructive"
          });
          setIsLoading(false);
          setButtonClicked(false);
          setConnectionError(true);
        }
      }
    };
    
    setTimeout(tryClickButton, 1000);
  };

  useEffect(() => {
    if (initAttempt > 0) {
      const checkAndInitWidget = () => {
        if (!hiddenWidgetRef.current) return;
        
        let widget = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
        
        if (!widget) {
          console.log("Creating widget element dynamically");
          const elevenlabsWidget = document.createElement('elevenlabs-convai');
          elevenlabsWidget.setAttribute('agent-id', AGENT_ID);
          elevenlabsWidget.setAttribute('language', language || 'it');
          hiddenWidgetRef.current.appendChild(elevenlabsWidget);
          
          setTimeout(startElevenLabsCall, 1000);
        } else {
          startElevenLabsCall();
        }
      };
      
      checkAndInitWidget();
    }
  }, [initAttempt, language]);

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <Button 
        onClick={startElevenLabsCall}
        disabled={isLoading}
        variant="outline"
        className={`
          rounded-full shadow-md px-6 py-2.5 font-bold text-lg
          ${buttonClicked ? 'max-w-[70px] aspect-square p-0' : 'max-w-[200px] w-full'}
          ${callActive 
            ? 'bg-ath-clay text-white border-white' 
            : 'bg-transparent text-white border border-white hover:bg-white hover:text-ath-clay'}
          transition-all duration-300
          ${connectionError ? 'border-red-500 text-red-500 hover:bg-red-500' : ''}
        `}
      >
        <div className={`relative ${callActive ? 'icon-glow' : ''}`}>
          {!callActive ? (
            <GiArtificialIntelligence 
              size={buttonClicked ? 40 : 30} 
              className={`${buttonClicked ? '' : 'mr-2'} transition-all duration-300 text-white`}
            />
          ) : (
            <XCircle 
              size={buttonClicked ? 40 : 30}
              className="text-white icon-stop-glow transition-all duration-300"
              strokeWidth={2.5}
            />
          )}
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full animate-spin rounded-full border-b-2 border-white"></div>
            </span>
          )}
        </div>
        {!buttonClicked && <span className="whitespace-nowrap text-white">Chiedi a Vicki</span>}
      </Button>
      
      <div 
        ref={hiddenWidgetRef} 
        className="hidden"
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
