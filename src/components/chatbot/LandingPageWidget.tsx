import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { GiArtificialIntelligence } from "react-icons/gi";
import { XCircle, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { useElevenLabsAuth } from '@/hooks/useElevenLabsAuth';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";
const MAX_INIT_ATTEMPTS = 5;
const MAX_BUTTON_FIND_ATTEMPTS = 7;
const WIDGET_SCRIPT_URL = "https://cdn.elevenlabs.io/convai/convai.js";

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const { hasApiKey } = useElevenLabsAuth(AGENT_ID);
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
  const manuallyRetriedRef = useRef(0);

  // Check if ElevenLabs script is already loaded
  useEffect(() => {
    // First check if window.ElevenLabsConvai is available
    if (window.ElevenLabsConvai) {
      console.log("ElevenLabs script already available globally");
      setScriptLoaded(true);
      return;
    }

    // Check if window.elevenLabsScriptLoaded flag is set (from index.html)
    if (window.elevenLabsScriptLoaded) {
      console.log("ElevenLabs script loaded flag detected");
      setScriptLoaded(true);
      return;
    }

    // Listen for the script loaded event (from index.html)
    const handleScriptLoaded = () => {
      console.log("ElevenLabs script loaded event detected");
      setScriptLoaded(true);
      setScriptLoadingFailed(false);
    };

    const handleScriptFailed = () => {
      console.log("ElevenLabs script failed event detected");
      setScriptLoadingFailed(true);
    };

    window.addEventListener('elevenlabs-script-loaded', handleScriptLoaded);
    window.addEventListener('elevenlabs-script-failed', handleScriptFailed);

    // If nothing is loaded yet, trigger loading
    if (!window.elevenLabsScriptLoaded && !window.elevenLabsScriptFailed) {
      if (typeof window.loadElevenLabsScript === 'function') {
        console.log("Triggering script load from window method");
        window.loadElevenLabsScript();
      } else {
        console.log("Loading script directly as fallback");
        loadScriptDirectly();
      }
    }

    // Cleanup event listeners
    return () => {
      window.removeEventListener('elevenlabs-script-loaded', handleScriptLoaded);
      window.removeEventListener('elevenlabs-script-failed', handleScriptFailed);
    };
  }, []);

  // Direct script loading function as fallback - improved with multiple CDNs
  const loadScriptDirectly = () => {
    if (scriptLoadingAttempt.current >= 3) {
      console.error("Failed to load script after multiple attempts");
      setScriptLoadingFailed(true);
      return;
    }
    
    scriptLoadingAttempt.current += 1;
    
    // Try different CDN sources in sequence
    const sources = [
      "https://cdn.elevenlabs.io/convai/convai.js",
      "https://storage.googleapis.com/xi-convai/convai.js",
      "https://convai-cdn.elevenlabs.io/convai.js"
    ];
    
    const source = sources[(scriptLoadingAttempt.current - 1) % sources.length];
    console.log(`Trying to load from ${source} (attempt ${scriptLoadingAttempt.current})`);
    
    const script = document.createElement('script');
    script.src = source;
    script.async = true;
    script.onload = () => {
      console.log(`Script loaded directly from ${source}`);
      setScriptLoaded(true);
      setScriptLoadingFailed(false);
      
      // Initialize immediately after loading
      setTimeout(() => {
        if (window.ElevenLabsConvai && !widgetInitialized.current) {
          try {
            window.ElevenLabsConvai.init({
              language: language || 'it',
              usePublicAgents: true
            });
            widgetInitialized.current = true;
            console.log("Widget initialized right after script load");
          } catch (err) {
            console.error("Failed to initialize widget after load:", err);
          }
        }
      }, 1000);
    };
    script.onerror = () => {
      console.error(`Direct script loading failed from ${source}`);
      setTimeout(loadScriptDirectly, 2000);
    };
    document.body.appendChild(script);
  };

  // Initialize the ElevenLabs widget with proper error handling
  useEffect(() => {
    if (!scriptLoaded) return;
    
    const initializeWidget = async () => {
      try {
        if (window.ElevenLabsConvai && !widgetInitialized.current) {
          console.log("Initializing ElevenLabs widget with language:", language);
          
          // Retry pattern for initialization with exponential backoff
          const attemptInit = (attempt = 0) => {
            try {
              // Initialize the widget
              window.ElevenLabsConvai.init({
                language: language || 'it',
                usePublicAgents: !hasApiKey // Only use public mode if we don't have API key
              });
              
              widgetInitialized.current = true;
              setInitializationError(false);
              console.log("ElevenLabs widget initialized successfully");
            } catch (error) {
              console.error(`Widget initialization failed (attempt ${attempt}):`, error);
              
              if (attempt < 3) {
                const delay = Math.pow(2, attempt) * 1000;
                console.log(`Retrying initialization in ${delay}ms`);
                setTimeout(() => attemptInit(attempt + 1), delay);
              } else {
                setInitializationError(true);
              }
            }
          };
          
          // Start initialization attempts
          attemptInit();
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
  }, [language, initAttempt, scriptLoaded, hasApiKey]);

  // Check for audio permissions
  const checkAudioPermissions = async () => {
    try {
      // Try to create an audio context first to check audio output
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioCtx;
      
      // Check microphone permissions
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Successfully got permission, keep the stream reference
      window.audioStream = stream;
      
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

  // Function to stop the call - enhanced for better button detection
  const stopElevenLabsCall = () => {
    console.log("Attempting to stop ElevenLabs call...");
    
    if (!hiddenWidgetRef.current) return;
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (widgetElement && widgetElement.shadowRoot) {
      // Try to find and click any stop button with enhanced selectors
      const stopSelectors = [
        'button[aria-label="Close"]', 
        'button[aria-label="Stop"]',
        'button[aria-label="Chiudi"]',
        'button[class*="close"]', 
        'button[class*="stop"]',
        'button[class*="end"]',
        'button[title*="Interrompi"]',
        'button[title*="Chiudi"]',
        '[role="button"][class*="close"]',
        // Aggressive selector for any button that might be the close button
        'button:not([class*="start"]):not([class*="open"])'
      ];
      
      let buttonFound = false;
      
      for (const selector of stopSelectors) {
        const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
        console.log(`Found ${buttons.length} buttons matching selector: ${selector}`);
        
        for (const button of buttons) {
          if (button instanceof HTMLElement) {
            console.log("Clicking stop button:", button);
            button.click();
            buttonFound = true;
            
            // Update state immediately to give user feedback
            setCallActive(false);
            setButtonClicked(false);
            
            return;
          }
        }
      }
      
      // If no button found, reset the widget more aggressively
      if (!buttonFound) {
        console.log("Could not find stop button, forcing widget reset");
        
        if (hiddenWidgetRef.current.contains(widgetElement)) {
          try {
            hiddenWidgetRef.current.removeChild(widgetElement);
            
            setButtonClicked(false);
            setCallActive(false);
            widgetInitialized.current = false;
            
            // Create a fresh widget after a short delay
            setTimeout(() => {
              if (window.ElevenLabsConvai) {
                try {
                  window.ElevenLabsConvai.init({
                    language: language || 'it',
                    usePublicAgents: !hasApiKey
                  });
                  widgetInitialized.current = true;
                  console.log("Widget reinitialized after reset");
                } catch (e) {
                  console.error("Failed to reinitialize widget:", e);
                }
              }
            }, 500);
          } catch (e) {
            console.error("Failed to reset widget:", e);
          }
        }
      }
    }
  };
  
  // Enhanced debug helper function to log all elements in the shadow DOM
  const logShadowDOMElements = () => {
    if (!hiddenWidgetRef.current) return;
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (widgetElement && widgetElement.shadowRoot) {
      console.log("All elements in shadow DOM:");
      const elements = widgetElement.shadowRoot.querySelectorAll('*');
      elements.forEach((element, index) => {
        const tagName = element.tagName;
        const className = element.className;
        const id = element.id;
        const attributes = Array.from(element.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' ');
        console.log(`Element ${index}: ${tagName} ${className} ${id} ${attributes}`);
      });
      
      console.log("All buttons in shadow DOM:");
      const buttons = widgetElement.shadowRoot.querySelectorAll('button, [role="button"]');
      buttons.forEach((button, index) => {
        const tagName = button.tagName;
        const className = button.className;
        const ariaLabel = button.getAttribute('aria-label');
        const title = button.getAttribute('title');
        const text = button.textContent;
        const attributes = Array.from(button.attributes).map(attr => `${attr.name}="${attr.value}"`).join(' ');
        console.log(`Button ${index}: ${tagName} ${className} ariaLabel="${ariaLabel}" title="${title}" text="${text}" ${attributes}`);
      });
    }
  };
  
  // Improved function to start the call with clearer state management
  const startElevenLabsCall = async () => {
    // Mark that this action is user-initiated
    userInitiatedRef.current = true;
    
    // Handle stop if call is already active - better state management
    if (callActive) {
      console.log("Call is active, stopping call");
      setIsLoading(true);
      stopElevenLabsCall();
      setTimeout(() => setIsLoading(false), 500); // Brief loading state for feedback
      return;
    }
    
    // Check if script loaded
    if (!scriptLoaded) {
      if (typeof window.loadElevenLabsScript === 'function') {
        window.loadElevenLabsScript();
      } else {
        loadScriptDirectly();
      }
      
      toast({
        title: "Caricamento in corso",
        description: "Il servizio ElevenLabs si sta caricando. Riprova tra qualche secondo.",
      });
      return;
    }
    
    // Check if script failed to load
    if (scriptLoadingFailed) {
      if (manuallyRetriedRef.current < 2) {
        manuallyRetriedRef.current++;
        setScriptLoadingFailed(false);
        scriptLoadingAttempt.current = 0;
        
        toast({
          title: "Nuovo tentativo",
          description: "Stiamo riprovando a caricare il servizio ElevenLabs."
        });
        
        if (typeof window.loadElevenLabsScript === 'function') {
          window.loadElevenLabsScript();
        } else {
          loadScriptDirectly();
        }
      } else {
        toast({
          title: "Errore di caricamento",
          description: "Non è stato possibile caricare il servizio ElevenLabs. Riprova più tardi o ricarica la pagina.",
          variant: "destructive"
        });
      }
      return;
    }
    
    console.log("Attempting to start ElevenLabs call...");
    setIsLoading(true);
    
    // Clear any previous errors
    setConnectionError(false);
    setPermissionError(false);
    
    // Change button appearance immediately for better UX
    setButtonClicked(true);
    
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
    
    // Make sure widget is properly initialized with API key awareness
    if (!widgetInitialized.current) {
      if (window.ElevenLabsConvai) {
        console.log("Re-initializing widget before call");
        try {
          window.ElevenLabsConvai.init({
            language: language || 'it',
            usePublicAgents: !hasApiKey // Use public mode only if no API key
          });
          widgetInitialized.current = true;
        } catch (err) {
          console.error("Error initializing widget:", err);
        }
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
    
    // Enhanced log for debugging
    console.log("Widget element before clicking:", widgetElement);
    logShadowDOMElements();
    
    // Try to find and click the start button - with improved reliability
    setTimeout(() => tryClickStartButton(0), 500);
  };
  
  // Helper function to find and click start button with retries and fallbacks
  const tryClickStartButton = (attemptNumber = 0) => {
    if (attemptNumber >= MAX_BUTTON_FIND_ATTEMPTS) {
      // After too many attempts, create a fresh widget and try one last time
      console.log("Max button find attempts reached, creating fresh widget");
      
      const freshWidget = document.createElement('elevenlabs-convai');
      freshWidget.setAttribute('agent-id', AGENT_ID);
      freshWidget.setAttribute('language', language || 'it');
      
      if (hiddenWidgetRef.current) {
        // Remove old widget
        const oldWidget = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
        if (oldWidget) {
          hiddenWidgetRef.current.removeChild(oldWidget);
        }
        
        // Add new widget
        hiddenWidgetRef.current.appendChild(freshWidget);
        
        // One final attempt after a delay
        setTimeout(() => {
          const finalAttempt = () => {
            logShadowDOMElements(); // Log everything for debugging
            
            const shadowRoot = freshWidget.shadowRoot;
            if (shadowRoot) {
              // Try to click ANY button
              console.log("Last resort: trying to click ANY button");
              const allButtons = shadowRoot.querySelectorAll('button');
              if (allButtons.length > 0) {
                // Skip first button which is usually close
                const targetButton = allButtons.length > 1 ? allButtons[1] : allButtons[0];
                if (targetButton instanceof HTMLElement) {
                  console.log("Clicking button:", targetButton);
                  targetButton.click();
                  setIsLoading(false);
                  setCallActive(true);
                  return;
                }
              }
            }
            
            // Give up
            console.error("Failed to find any button to click");
            setIsLoading(false);
            setButtonClicked(false);
            setConnectionError(true);
            
            toast({
              title: "Errore",
              description: "Non è stato possibile avviare la chiamata. Ricarica la pagina e riprova.",
              variant: "destructive"
            });
          };
          
          // Wait for shadow DOM to be created and try
          setTimeout(finalAttempt, 1000);
        }, 1000);
      }
      return;
    }
    
    const widgetElement = hiddenWidgetRef.current?.querySelector('elevenlabs-convai');
    if (!widgetElement || !widgetElement.shadowRoot) {
      // If widget is not ready yet, wait and retry
      console.log(`Widget not ready, retrying (${attemptNumber + 1}/${MAX_BUTTON_FIND_ATTEMPTS})...`);
      
      // Exponential backoff
      setTimeout(() => tryClickStartButton(attemptNumber + 1), Math.pow(2, attemptNumber) * 200);
      return;
    }
    
    console.log(`Attempt ${attemptNumber + 1} to find start button`);
    
    // First try direct targeting by class name structure
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
    
    // Try with more specific targeting - title-based button
    const titleButtons = widgetElement.shadowRoot.querySelectorAll('button[title*="Vicki"], button[title*="Ask"], button[title*="Start"], button[title*="Call"], button[title*="Chiedi"]');
    for (const button of titleButtons) {
      if (button instanceof HTMLElement) {
        console.log("Found button by title:", button);
        button.click();
        console.log("Button clicked by title!");
        setIsLoading(false);
        setCallActive(true);
        return;
      }
    }
    
    // Try with different selectors - more aggressive targeting
    const buttonSelectors = [
      'button:not([aria-label="Close"]):not([aria-label="Settings"])',
      'button:not([class*="close"]):not([class*="settings"])',
      'button.call-button',
      'button[class*="call"]',
      'button[class*="start"]',
      'button'
    ];
    
    // Log all buttons for debugging
    const allButtons = widgetElement.shadowRoot.querySelectorAll('button');
    console.log(`Found ${allButtons.length} buttons in the shadow DOM`);
    
    // Try each selector
    let buttonClicked = false;
    for (const selector of buttonSelectors) {
      if (buttonClicked) break;
      
      const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
      console.log(`Selector '${selector}' found ${buttons.length} elements`);
      
      for (const [index, button] of Array.from(buttons).entries()) {
        // Skip very first button which is usually settings or close
        // Skip buttons that are explicitly close
        if (button instanceof HTMLElement && 
            !button.getAttribute('aria-label')?.includes('Close') && 
            !button.getAttribute('aria-label')?.includes('Settings') && 
            !button.classList.contains('close')) {
          
          // Prefer buttons later in the DOM (usually the main action button)
          if (index > 0 || buttons.length === 1) {
            console.log(`Attempting to click button ${index}:`, button);
            try {
              button.click();
              buttonClicked = true;
              setIsLoading(false);
              setCallActive(true);
              console.log(`Successfully clicked button ${index}`);
              return;
            } catch (e) {
              console.error(`Error clicking button ${index}:`, e);
            }
          }
        }
      }
    }
    
    // If no button clicked, try next attempt
    if (!buttonClicked) {
      console.log(`No suitable button found, trying again in ${Math.pow(2, attemptNumber) * 300}ms`);
      setTimeout(() => tryClickStartButton(attemptNumber + 1), Math.pow(2, attemptNumber) * 300);
    }

    // After button clicking logic, add this to ensure state is updated:
    const updateStateAfterSuccessfulClick = () => {
      setIsLoading(false);
      setCallActive(true);
      console.log("Call successfully activated");
      
      // Add timeout to verify call is really active by checking the DOM after a delay
      setTimeout(() => {
        if (hiddenWidgetRef.current) {
          const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
          if (widgetElement && widgetElement.shadowRoot) {
            const activeCallIndicators = widgetElement.shadowRoot.querySelectorAll(
              '.active-call, .call-active, [data-status="connected"], [class*="active"], [class*="connected"]'
            );
            
            // If we don't find active call indicators, the call might have failed silently
            if (activeCallIndicators.length === 0) {
              console.log("Call activation check failed - no active indicators found");
              setCallActive(false);
              setButtonClicked(false);
            }
          }
        }
      }, 2000);
    };
    
    // Include this at appropriate points in the button click logic
    // Note: Replace success points in the existing logic with updateStateAfterSuccessfulClick()
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

  // Manual retry function with user feedback
  const handleManualRetry = () => {
    console.log("Manual retry triggered");
    setScriptLoadingFailed(false);
    scriptLoadingAttempt.current = 0;
    manuallyRetriedRef.current += 1;
    
    toast({
      title: "Nuovo tentativo",
      description: "Stiamo riprovando a caricare il servizio ElevenLabs."
    });
    
    // Try to load from multiple sources
    if (typeof window.loadElevenLabsScript === 'function') {
      window.loadElevenLabsScript();
    } else {
      loadScriptDirectly();
    }
  };

  // Render button status icon based on current state - enhanced for better visual feedback
  const renderButtonIcon = () => {
    if (isLoading) {
      return <Loader2 size={buttonClicked ? 80 : 60} className="animate-spin text-white vicki-icon-active" />;
    } else if (connectionError) {
      return <AlertCircle size={buttonClicked ? 80 : 60} className="text-white vicki-icon-active" />;
    } else if (callActive) {
      return (
        <XCircle 
          size={buttonClicked ? 80 : 60}
          className="text-white icon-stop-glow transition-all duration-300 vicki-icon-active animate-pulse-soft"
          strokeWidth={2.5}
        />
      );
    } else {
      return (
        <GiArtificialIntelligence 
          size={buttonClicked ? 80 : 60} 
          className={`${buttonClicked ? '' : 'mr-2'} transition-all duration-300 text-white vicki-icon ${buttonClicked ? 'vicki-icon-active' : ''}`}
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
          rounded-full shadow-md px-6 py-3 font-bold text-lg
          ${buttonClicked ? 'max-w-[120px] h-[120px] aspect-square p-0' : 'max-w-[200px] w-full'}
          ${callActive 
            ? 'bg-ath-clay border-ath-clay hover:bg-ath-clay/90 hover:border-ath-clay/90 animate-pulse-soft' 
            : 'bg-transparent border-ath-clay text-white hover:bg-ath-clay hover:text-white'}
          transition-all duration-300 ease-in-out
          ${connectionError ? 'border-red-500 text-red-500 hover:bg-red-500' : ''}
          ${permissionError ? 'border-yellow-500 animate-pulse' : ''}
        `}
        aria-label={callActive ? "Stop ElevenLabs call" : "Start ElevenLabs call"}
      >
        <div className={`relative flex items-center justify-center ${callActive ? 'icon-glow' : ''}`}>
          {renderButtonIcon()}
        </div>
        {!buttonClicked && <span className="whitespace-nowrap text-white">Chiedi a Vicki</span>}
      </Button>
      
      {scriptLoadingFailed && (
        <div className="mt-2 flex flex-col items-center">
          <p className="text-xs text-red-400">
            Errore di caricamento.
          </p>
          <button 
            onClick={handleManualRetry} 
            className="elevenlabs-retry-button flex items-center mt-1"
          >
            <RefreshCw size={12} className="mr-1" /> Riprova
          </button>
        </div>
      )}
      
      {!scriptLoaded && !scriptLoadingFailed && (
        <div className="elevenlabs-loading-indicator flex items-center text-xs text-white/70 mt-2">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      )}
      
      <div 
        ref={hiddenWidgetRef} 
        className="hidden"
        aria-hidden="true"
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
