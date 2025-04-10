
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { GiArtificialIntelligence } from "react-icons/gi";

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

  // Initialize the widget when the component mounts
  useEffect(() => {
    if (window.ElevenLabsConvai && !widgetInitialized.current) {
      window.ElevenLabsConvai.init({
        language: language || 'it',
        usePublicAgents: true, // Use public agents mode
        onConnect: () => {
          console.log("ElevenLabs connection established!");
          setCallActive(true);
          setConnectionError(false);
        },
        onDisconnect: () => {
          console.log("ElevenLabs connection closed");
          setCallActive(false);
        },
        onError: (error) => {
          console.error("ElevenLabs connection error:", error);
          setConnectionError(true);
          setCallActive(false);
          toast({
            title: "Errore di connessione",
            description: "Si è verificato un problema con la connessione. Riprova più tardi.",
            variant: "destructive"
          });
          setIsLoading(false);
          setButtonClicked(false);
        }
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
  
  // Improved function to start the ElevenLabs call
  const startElevenLabsCall = () => {
    console.log("Attempting to start ElevenLabs call...");
    setIsLoading(true);
    setButtonClicked(true); // Set button to clicked state
    
    // Increment init attempt counter to trigger the useEffect
    setInitAttempt(prev => prev + 1);
    
    // First, make sure the widget is in the DOM
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
    
    // Find the widget element
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (!widgetElement) {
      console.error("Could not find the ElevenLabs widget element");
      setIsLoading(false);
      setButtonClicked(false);
      return;
    }
    
    console.log("Found widget element:", widgetElement);
    
    // Function to try different button selectors
    const tryClickButton = () => {
      if (!widgetElement.shadowRoot) {
        console.log("Widget has no shadowRoot, trying again in 1 second...");
        setTimeout(tryClickButton, 1000);
        return;
      }
      
      console.log("Shadow root found, looking for button...");
      
      // Target the button specifically by title
      const startCallButton = widgetElement.shadowRoot.querySelector('button[title="Chiedi a Vicki"]');
      if (startCallButton && startCallButton instanceof HTMLElement) {
        console.log("Found start call button by title:", startCallButton);
        startCallButton.click();
        console.log("Start call button clicked by title!");
        setIsLoading(false);
        setCallActive(true);
        return;
      }
      
      // Try multiple selectors for the button
      const buttonSelectors = [
        'button[aria-label="Start Call"]',
        'button.call-button',
        'button[class*="start-call"]',
        'button[class*="call"]',
        'button:not([aria-label="Close"])',
        'button'
      ];
      
      // Debug the shadow DOM to see what elements are available
      const allButtons = widgetElement.shadowRoot.querySelectorAll('button');
      console.log(`Found ${allButtons.length} buttons in the shadow DOM`);
      allButtons.forEach((button, buttonIndex) => {
        console.log(`Button ${buttonIndex}:`, button.outerHTML);
      });
      
      // Try each selector
      let buttonClicked = false;
      for (const selector of buttonSelectors) {
        const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
        console.log(`Selector '${selector}' found ${buttons.length} elements`);
        
        // Using forEach with index parameter to access button index
        buttons.forEach((button, buttonIndex) => {
          // Skip the first two buttons which are usually Cancel and Agree
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
        // Try to look for any clickable element as a last resort
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
    
    // Give widget time to fully initialize if it just loaded
    setTimeout(tryClickButton, 1000);
  };

  // Additional effect to try to initialize the widget when the user clicks
  useEffect(() => {
    if (initAttempt > 0) {
      // Only run this effect when init attempt counter changes and is greater than 0
      const checkAndInitWidget = () => {
        if (!hiddenWidgetRef.current) return;
        
        // Check if widget already exists
        let widget = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
        
        if (!widget) {
          // If widget doesn't exist, create it
          console.log("Creating widget element dynamically");
          const elevenlabsWidget = document.createElement('elevenlabs-convai');
          elevenlabsWidget.setAttribute('agent-id', AGENT_ID);
          elevenlabsWidget.setAttribute('language', language || 'it');
          hiddenWidgetRef.current.appendChild(elevenlabsWidget);
          
          // Wait for widget to initialize
          setTimeout(startElevenLabsCall, 1000);
        } else {
          // Widget exists, try to start call
          startElevenLabsCall();
        }
      };
      
      checkAndInitWidget();
    }
  }, [initAttempt, language]);

  // Function to create the appropriate button class based on states
  const getButtonClasses = () => {
    let baseClasses = "relative rounded-full shadow-md flex items-center justify-center w-full max-w-[200px] border border-white bg-transparent hover:bg-white/10 hover:text-white transition-all duration-300 text-white font-bold";
    
    if (buttonClicked) {
      baseClasses += ' max-w-[70px] aspect-square p-0';
    }
    
    if (callActive) {
      baseClasses += ' animate-pulse-soft';
    }
    
    if (connectionError) {
      baseClasses += ' border-red-500 text-red-500';
    }
    
    return baseClasses;
  };

  // Function to determine icon size based on state
  const getIconSize = () => {
    return buttonClicked ? 40 : 30;
  };

  // Function to determine icon className based on state
  const getIconClassName = () => {
    let classes = buttonClicked ? "" : "mr-2";
    
    if (callActive) {
      classes += ' text-white';
    }
    
    if (connectionError) {
      classes += ' text-red-500';
    }
    
    return classes;
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      {/* Button container - Using Button component from shadcn/ui */}
      <Button 
        onClick={startElevenLabsCall}
        disabled={isLoading}
        variant="outline"
        className={getButtonClasses()}
      >
        <div className={`relative ${callActive ? 'icon-glow' : ''}`}>
          <GiArtificialIntelligence 
            size={getIconSize()} 
            className={getIconClassName()}
          />
          {isLoading && (
            <span className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full animate-spin rounded-full border-b-2 border-white"></div>
            </span>
          )}
        </div>
        {!buttonClicked && <span className="whitespace-nowrap">Chiedi a Vicki</span>}
      </Button>
      
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
