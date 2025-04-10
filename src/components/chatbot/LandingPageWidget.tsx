
import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { GiArtificialIntelligence } from "react-icons/gi";
import { XCircle, AlertCircle, Loader2 } from "lucide-react";

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";
const MAX_INIT_ATTEMPTS = 5;
const MAX_BUTTON_FIND_ATTEMPTS = 7;
const WIDGET_SCRIPT_URL = "https://cdn.elevenlabs.io/convai/convai.js";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const hiddenWidgetRef = useRef<HTMLDivElement>(null);
  const [initAttempt, setInitAttempt] = useState(0);
  const widgetInitialized = useRef(false);
  const [isLoading, setIsLoading] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const [callActive, setCallActive] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [permissionError, setPermissionError] = useState(false);
  const [initializationError, setInitializationError] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptLoadingFailed, setScriptLoadingFailed] = useState(false);
  const buttonFindAttemptsRef = useRef(0);
  const audioContextRef = useRef<AudioContext | null>(null);
  const userInitiatedRef = useRef(false); // Track if actions are user-initiated
  const scriptLoadingAttempt = useRef(0);

  // Load ElevenLabs script if not already available
  useEffect(() => {
    if (window.ElevenLabsConvai) {
      console.log("ElevenLabs script already loaded");
      setScriptLoaded(true);
      setScriptLoadingFailed(false);
      return;
    }

    const loadScript = () => {
      const maxLoadAttempts = 3;
      if (scriptLoadingAttempt.current >= maxLoadAttempts) {
        console.error(`Failed to load ElevenLabs script after ${maxLoadAttempts} attempts`);
        setScriptLoadingFailed(true);
        return;
      }
      
      scriptLoadingAttempt.current += 1;
      console.log(`Loading ElevenLabs script (attempt ${scriptLoadingAttempt.current}) from:`, WIDGET_SCRIPT_URL);
      
      // Remove any existing script to avoid conflicts
      const existingScript = document.querySelector(`script[src="${WIDGET_SCRIPT_URL}"]`);
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
      
      const script = document.createElement('script');
      script.src = WIDGET_SCRIPT_URL;
      script.async = true;
      script.onload = () => {
        console.log("ElevenLabs script loaded successfully");
        setScriptLoaded(true);
        setScriptLoadingFailed(false);
      };
      script.onerror = (error) => {
        console.error("Error loading ElevenLabs script:", error);
        // Try loading script from alternative CDN
        setTimeout(() => loadScript(), 1500); // Retry with backoff
      };
      document.body.appendChild(script);
    };

    // Load script with a slight delay to ensure DOM is ready
    const timer = setTimeout(loadScript, 500);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // Initialize the ElevenLabs widget with proper error handling
  useEffect(() => {
    if (!scriptLoaded) return;
    
    const initializeWidget = async () => {
      try {
        if (window.ElevenLabsConvai && !widgetInitialized.current) {
          console.log("Initializing ElevenLabs widget with language:", language);
          
          // Initialize the widget
          window.ElevenLabsConvai.init({
            language: language || 'it',
            usePublicAgents: true
          });
          
          widgetInitialized.current = true;
          setInitializationError(false);
          console.log("ElevenLabs widget initialized successfully");
        } else if (!window.ElevenLabsConvai && initAttempt < MAX_INIT_ATTEMPTS) {
          console.log(`ElevenLabs API not found. Attempt ${initAttempt + 1}/${MAX_INIT_ATTEMPTS}`);
          
          // Try again after a delay with exponential backoff
          setTimeout(() => {
            setInitAttempt(prev => prev + 1);
          }, Math.pow(2, initAttempt) * 1000);
        } else if (!window.ElevenLabsConvai && initAttempt >= MAX_INIT_ATTEMPTS) {
          console.error("Failed to find ElevenLabs API after multiple attempts");
          setInitializationError(true);
          
          // Only show error toast if user initiated this action
          if (userInitiatedRef.current) {
            toast({
              title: "Errore di caricamento",
              description: "Non è stato possibile caricare l'API di ElevenLabs. Ricarica la pagina o verifica la connessione internet.",
              variant: "destructive"
            });
          }
        }
      } catch (error) {
        console.error("Unexpected error during widget initialization:", error);
        setInitializationError(true);
      }
    };

    initializeWidget();
  }, [language, initAttempt, scriptLoaded]);

  // Check for audio permissions
  const checkAudioPermissions = async () => {
    try {
      // Try to create an audio context first to check audio output
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioCtx;
      
      // Check microphone permissions
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      setPermissionError(false);
      return true;
    } catch (err) {
      console.error("Audio permission error:", err);
      setPermissionError(true);
      
      // Only show toast when user has initiated an action
      if (userInitiatedRef.current) {
        toast({
          title: "Permessi audio mancanti",
          description: "Per usare questa funzionalità, concedi l'accesso al microfono nel tuo browser.",
          variant: "destructive"
        });
      }
      
      return false;
    }
  };

  // Update widget language when app language changes
  useEffect(() => {
    if (hiddenWidgetRef.current) {
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement) {
        widgetElement.setAttribute('language', language || 'it');
      }
    }
  }, [language]);

  // Monitor connection status
  useEffect(() => {
    const checkConnectionStatus = () => {
      if (!hiddenWidgetRef.current || !callActive) return;
      
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement && widgetElement.shadowRoot) {
        // Look for active call indicators in the shadow DOM
        const activeCallIndicators = widgetElement.shadowRoot.querySelectorAll(
          '.active-call, .call-active, [data-status="connected"], [class*="active"], [class*="connected"]'
        );
        
        // Look for error elements in the shadow DOM
        const errorElements = widgetElement.shadowRoot.querySelectorAll(
          '.error-state, .connection-error, [data-status="error"], [class*="error"]'
        );

        // Check for permission dialogs
        const permissionElements = widgetElement.shadowRoot.querySelectorAll(
          '[class*="permission"], [class*="allow"], [class*="access"]'
        );
        
        // If active indicators are gone, call is probably ended
        if (activeCallIndicators.length === 0 && callActive) {
          console.log("ElevenLabs call appears to have ended");
          setCallActive(false);
          setButtonClicked(false);
        }
        
        // Check for errors
        if (errorElements.length > 0) {
          console.error("ElevenLabs connection appears to have an error");
          
          // Only show errors if user initiated this action
          if (userInitiatedRef.current) {
            toast({
              title: "Errore di connessione",
              description: "Si è verificato un problema con la connessione. Riprova più tardi.",
              variant: "destructive"
            });
          }
          
          setIsLoading(false);
          setButtonClicked(false);
          setConnectionError(true);
          setCallActive(false);
        }
        
        // Check for permission dialogs
        if (permissionElements.length > 0) {
          console.log("Permission dialog detected");
          setPermissionError(true);
        }
      }
    };
    
    // Check connection status periodically when call is active
    let connectionCheckInterval: number | null = null;
    if (callActive) {
      connectionCheckInterval = window.setInterval(checkConnectionStatus, 1000);
    }
    
    return () => {
      if (connectionCheckInterval !== null) {
        clearInterval(connectionCheckInterval);
      }
    };
  }, [callActive]);

  // Function to stop the call
  const stopElevenLabsCall = () => {
    console.log("Attempting to stop ElevenLabs call...");
    
    if (!hiddenWidgetRef.current) return;
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (widgetElement && widgetElement.shadowRoot) {
      // Try to find and click any stop button
      const stopSelectors = [
        'button[aria-label="Close"]', 
        'button[aria-label="Stop"]', 
        'button[class*="close"]', 
        'button[class*="stop"]',
        'button[class*="end"]',
        'button[title*="Interrompi"]',
        'button[title*="Chiudi"]',
        '[role="button"][class*="close"]'
      ];
      
      for (const selector of stopSelectors) {
        const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
        console.log(`Found ${buttons.length} buttons matching selector: ${selector}`);
        
        for (const button of buttons) {
          if (button instanceof HTMLElement) {
            console.log("Clicking stop button:", button);
            button.click();
            return;
          }
        }
      }
      
      console.log("Could not find stop button, trying to reset the widget");
      
      // If no stop button found, reset the widget
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
  };
  
  // Debug helper function to log all elements in the shadow DOM
  const logShadowDOMElements = () => {
    if (!hiddenWidgetRef.current) return;
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (widgetElement && widgetElement.shadowRoot) {
      console.log("All elements in shadow DOM:");
      const elements = widgetElement.shadowRoot.querySelectorAll('*');
      elements.forEach((element, index) => {
        console.log(`Element ${index}:`, element.tagName, element.className, element);
      });
      
      console.log("All buttons in shadow DOM:");
      const buttons = widgetElement.shadowRoot.querySelectorAll('button, [role="button"]');
      buttons.forEach((button, index) => {
        console.log(`Button ${index}:`, button.tagName, button.className, button.getAttribute('aria-label'), button);
      });
    }
  };
  
  // Function to start the call
  const startElevenLabsCall = async () => {
    // Mark that this action is user-initiated
    userInitiatedRef.current = true;
    
    // Handle stop if call is already active
    if (callActive) {
      stopElevenLabsCall();
      return;
    }
    
    // Check if script loaded
    if (!scriptLoaded) {
      toast({
        title: "Caricamento in corso",
        description: "Il servizio ElevenLabs si sta caricando. Riprova tra qualche secondo.",
      });
      return;
    }
    
    // Check if script failed to load
    if (scriptLoadingFailed) {
      toast({
        title: "Errore di caricamento",
        description: "Non è stato possibile caricare il servizio ElevenLabs. Riprova più tardi o ricarica la pagina.",
        variant: "destructive"
      });
      return;
    }
    
    console.log("Attempting to start ElevenLabs call...");
    setIsLoading(true);
    setButtonClicked(true);
    setConnectionError(false);
    
    // Check for widget reference
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
    
    // Check for audio permissions
    const hasPermissions = await checkAudioPermissions();
    if (!hasPermissions) {
      setIsLoading(false);
      setButtonClicked(false);
      return;
    }
    
    // Reset attempts counter
    buttonFindAttemptsRef.current = 0;
    
    // Make sure widget is properly initialized
    if (!widgetInitialized.current) {
      if (window.ElevenLabsConvai) {
        console.log("Re-initializing widget before call");
        window.ElevenLabsConvai.init({
          language: language || 'it',
          usePublicAgents: true
        });
        widgetInitialized.current = true;
      } else {
        console.log("Widget API not available, triggering re-init attempt");
        setInitAttempt(prev => prev + 1);
        setIsLoading(false);
        setButtonClicked(false);
        return;
      }
    }
    
    // Re-create widget if needed
    let widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (!widgetElement) {
      console.log("Creating widget element dynamically");
      widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', AGENT_ID);
      widgetElement.setAttribute('language', language || 'it');
      hiddenWidgetRef.current.appendChild(widgetElement);
      
      // Wait a bit for the widget to initialize
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    // Log all elements in shadow DOM for debugging
    logShadowDOMElements();
    
    // Try to find and click the start button
    tryClickStartButton();
  };
  
  // Helper function to find and click start button with retries
  const tryClickStartButton = () => {
    const widgetElement = hiddenWidgetRef.current?.querySelector('elevenlabs-convai');
    if (!widgetElement || !widgetElement.shadowRoot) {
      // If widget is not ready yet, wait and retry
      if (buttonFindAttemptsRef.current < MAX_BUTTON_FIND_ATTEMPTS) {
        buttonFindAttemptsRef.current++;
        console.log(`Widget not ready, retrying (${buttonFindAttemptsRef.current}/${MAX_BUTTON_FIND_ATTEMPTS})...`);
        
        // Exponential backoff
        setTimeout(tryClickStartButton, Math.pow(2, buttonFindAttemptsRef.current) * 200);
      } else {
        // Give up after too many attempts
        console.error("Failed to find widget after multiple attempts");
        setIsLoading(false);
        setButtonClicked(false);
        setConnectionError(true);
        
        toast({
          title: "Errore",
          description: "Non è stato possibile avviare la chiamata. Riprova più tardi.",
          variant: "destructive"
        });
      }
      return;
    }
    
    // First try direct targeting by class name structure - this is the most reliable method
    // Look for buttons with specific classes that ElevenLabs uses
    const directButtons = widgetElement.shadowRoot.querySelectorAll(
      'button._start_1xhaw_1, button[class*="start"], button[data-action="start"], [role="button"][class*="start"]'
    );
    
    if (directButtons.length > 0) {
      console.log("Found direct start button match:", directButtons[0]);
      if (directButtons[0] instanceof HTMLElement) {
        directButtons[0].click();
        console.log("Direct start button clicked!");
        setIsLoading(false);
        setCallActive(true);
        return;
      }
    }
    
    // Second try title-based button
    const startCallButton = widgetElement.shadowRoot.querySelector('button[title="Chiedi a Vicki"]');
    if (startCallButton && startCallButton instanceof HTMLElement) {
      console.log("Found start call button by title:", startCallButton);
      startCallButton.click();
      console.log("Start call button clicked by title!");
      setIsLoading(false);
      setCallActive(true);
      return;
    }
    
    // Try with different selectors
    const buttonSelectors = [
      'button[aria-label="Start Call"]',
      'button.call-button',
      'button[class*="start-call"]',
      'button[class*="start"]',
      'button[class*="call"]',
      'button:not([aria-label="Close"])',
      'button'
    ];
    
    // Log all buttons for debugging
    const allButtons = widgetElement.shadowRoot.querySelectorAll('button');
    console.log(`Found ${allButtons.length} buttons in the shadow DOM`);
    allButtons.forEach((button, buttonIndex) => {
      console.log(`Button ${buttonIndex} innerHTML:`, button.innerHTML);
      console.log(`Button ${buttonIndex} outerHTML:`, button.outerHTML);
    });
    
    // Try each selector
    let buttonClicked = false;
    for (const selector of buttonSelectors) {
      const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
      console.log(`Selector '${selector}' found ${buttons.length} elements`);
      
      buttons.forEach((button, buttonIndex) => {
        // Skip first button (usually close/settings) and only click buttons that look like start buttons
        if (buttonIndex > 0 && button instanceof HTMLElement && 
            !button.getAttribute('aria-label')?.includes('Close') && 
            !button.classList.contains('close')) {
          console.log("Found potential start button:", button);
          button.click();
          console.log("Button clicked!");
          buttonClicked = true;
          setIsLoading(false);
          setCallActive(true);
          return;
        }
      });
      
      if (buttonClicked) break;
    }
    
    // If no button clicked, try to click any clickable element
    if (!buttonClicked) {
      console.log("Could not find a suitable button, trying to find any clickable element");
      
      const clickableElements = widgetElement.shadowRoot.querySelectorAll('[role="button"], a, button, [class*="start"], [class*="call"]');
      console.log(`Found ${clickableElements.length} clickable elements`);
      
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
    }
    
    // If still no button clicked, and we haven't reached max attempts, try again
    if (!buttonClicked && buttonFindAttemptsRef.current < MAX_BUTTON_FIND_ATTEMPTS) {
      buttonFindAttemptsRef.current++;
      console.log(`No button found, retrying (${buttonFindAttemptsRef.current}/${MAX_BUTTON_FIND_ATTEMPTS})...`);
      
      // Exponential backoff for retries
      setTimeout(tryClickStartButton, Math.pow(2, buttonFindAttemptsRef.current) * 300);
    } else if (!buttonClicked) {
      // Give up after too many attempts
      console.error("Could not find any button to click after multiple attempts");
      setIsLoading(false);
      setButtonClicked(false);
      setConnectionError(true);
      
      toast({
        title: "Errore",
        description: "Non è stato possibile avviare la chiamata. Riprova più tardi.",
        variant: "destructive"
      });
    }
  };

  // Create or update widget when initialization is attempted
  useEffect(() => {
    if (initAttempt > 0 && scriptLoaded) {
      // Create or update widget element
      if (hiddenWidgetRef.current) {
        let widget = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
        
        if (!widget) {
          console.log("Creating widget element");
          const elevenlabsWidget = document.createElement('elevenlabs-convai');
          elevenlabsWidget.setAttribute('agent-id', AGENT_ID);
          elevenlabsWidget.setAttribute('language', language || 'it');
          hiddenWidgetRef.current.appendChild(elevenlabsWidget);
        }
      }
    }
  }, [initAttempt, language, scriptLoaded]);

  // Render button status icon based on current state
  const renderButtonIcon = () => {
    if (isLoading) {
      return <Loader2 size={buttonClicked ? 40 : 30} className="animate-spin text-white" />;
    } else if (connectionError) {
      return <AlertCircle size={buttonClicked ? 40 : 30} className="text-white" />;
    } else if (callActive) {
      return (
        <XCircle 
          size={buttonClicked ? 40 : 30}
          className="text-white icon-stop-glow transition-all duration-300"
          strokeWidth={2.5}
        />
      );
    } else {
      return (
        <GiArtificialIntelligence 
          size={buttonClicked ? 40 : 30} 
          className={`${buttonClicked ? '' : 'mr-2'} transition-all duration-300 text-white`}
        />
      );
    }
  };

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <Button 
        onClick={startElevenLabsCall}
        disabled={isLoading || initializationError}
        variant="outline"
        className={`
          rounded-full shadow-md px-6 py-2.5 font-bold text-lg
          ${buttonClicked ? 'max-w-[70px] aspect-square p-0' : 'max-w-[200px] w-full'}
          ${callActive 
            ? 'bg-ath-clay border-ath-clay hover:bg-ath-clay/90 hover:border-ath-clay/90' 
            : 'bg-transparent border-ath-clay text-white hover:bg-ath-clay hover:text-white'}
          transition-all duration-300
          ${connectionError ? 'border-red-500 text-red-500 hover:bg-red-500' : ''}
          ${permissionError ? 'border-yellow-500 animate-pulse' : ''}
        `}
      >
        <div className={`relative ${callActive ? 'icon-glow' : ''}`}>
          {renderButtonIcon()}
        </div>
        {!buttonClicked && <span className="whitespace-nowrap text-white">Chiedi a Vicki</span>}
      </Button>
      
      {scriptLoadingFailed && (
        <p className="text-xs text-red-400 mt-2">
          Errore di caricamento. <button 
            onClick={() => {
              setScriptLoadingFailed(false);
              scriptLoadingAttempt.current = 0;
            }} 
            className="underline hover:text-red-300"
          >
            Riprova
          </button>
        </p>
      )}
      
      {!scriptLoaded && !scriptLoadingFailed && (
        <div className="flex items-center text-xs text-white/70 mt-2">
          <span className="inline-block w-3 h-3 bg-white/60 rounded-full mr-2 animate-pulse"></span>
          Caricamento...
        </div>
      )}
      
      <div 
        ref={hiddenWidgetRef} 
        className="hidden"
      >
        {scriptLoaded && (
          <elevenlabs-convai 
            agent-id={AGENT_ID} 
            language={language || 'it'}
          ></elevenlabs-convai>
        )}
      </div>
    </div>
  );
};

export default LandingPageWidget;
