
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Phone } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const hiddenWidgetRef = useRef<HTMLDivElement>(null);
  const [initAttempt, setInitAttempt] = useState(0);
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
      return;
    }
    
    // Find the widget element
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (!widgetElement) {
      console.error("Could not find the ElevenLabs widget element");
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
      allButtons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.outerHTML);
      });
      
      // Try each selector
      let buttonClicked = false;
      for (const selector of buttonSelectors) {
        const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
        console.log(`Selector '${selector}' found ${buttons.length} elements`);
        
        for (const button of buttons) {
          if (button instanceof HTMLElement && 
              !button.getAttribute('aria-label')?.includes('Close') && 
              !button.classList.contains('close')) {
            console.log("Found potential start button:", button);
            button.click();
            console.log("Button clicked!");
            buttonClicked = true;
            break;
          }
        }
        
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
            break;
          }
        }
        
        if (!buttonClicked) {
          toast({
            title: "Errore",
            description: "Impossibile avviare la chiamata. Riprova più tardi.",
            variant: "destructive"
          });
        }
      }
    };
    
    // Give widget time to fully initialize if it just loaded
    setTimeout(tryClickButton, 500);
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
