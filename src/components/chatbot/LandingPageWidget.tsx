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
const CDN_TIMEOUT = 5000; // 5 seconds timeout for CDN loads

const LandingPageWidget = () => {
  const { language } = useLanguage();
  const { hasApiKey, apiKeyLoaded, apiKeyError } = useElevenLabsAuth(AGENT_ID);
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
  const cdnTimeoutsRef = useRef<number[]>([]);

  useEffect(() => {
    return () => {
      cdnTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    };
  }, []);

  useEffect(() => {
    if (window.ElevenLabsConvai) {
      console.log("ElevenLabs script already available globally");
      setScriptLoaded(true);
      return;
    }

    if (window.elevenLabsScriptLoaded) {
      console.log("ElevenLabs script loaded flag detected");
      setScriptLoaded(true);
      return;
    }

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

    if (apiKeyLoaded) {
      if (!window.elevenLabsScriptLoaded && !window.elevenLabsScriptFailed) {
        if (typeof window.loadElevenLabsScript === 'function') {
          console.log("Triggering script load from window method");
          window.loadElevenLabsScript();
        } else {
          console.log("Loading script directly as fallback");
          loadScriptDirectly();
        }
      }
    }

    return () => {
      window.removeEventListener('elevenlabs-script-loaded', handleScriptLoaded);
      window.removeEventListener('elevenlabs-script-failed', handleScriptFailed);
    };
  }, [apiKeyLoaded]);

  const loadScriptDirectly = () => {
    if (scriptLoadingAttempt.current >= 3) {
      console.error("Failed to load script after multiple attempts");
      setScriptLoadingFailed(true);
      return;
    }
    
    cdnTimeoutsRef.current.forEach(timeout => clearTimeout(timeout));
    cdnTimeoutsRef.current = [];
    
    scriptLoadingAttempt.current += 1;
    
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
    
    const timeoutId = window.setTimeout(() => {
      console.log(`Loading from ${source} timed out after ${CDN_TIMEOUT}ms`);
      const errorEvent = new Event('error');
      script.dispatchEvent(errorEvent);
    }, CDN_TIMEOUT);
    
    cdnTimeoutsRef.current.push(timeoutId);
    
    script.onload = () => {
      clearTimeout(timeoutId);
      
      console.log(`Script loaded directly from ${source}`);
      setScriptLoaded(true);
      setScriptLoadingFailed(false);
      
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
    
    script.onerror = (err: Event) => {
      clearTimeout(timeoutId);
      
      console.error(`Direct script loading failed from ${source}:`, err);
      setTimeout(loadScriptDirectly, 1000);
    };
    
    document.body.appendChild(script);
  };

  useEffect(() => {
    if (!scriptLoaded || !apiKeyLoaded) return;
    
    const initializeWidget = async () => {
      try {
        if (window.ElevenLabsConvai && !widgetInitialized.current) {
          console.log("Initializing ElevenLabs widget with language:", language);
          
          const usePublicMode = !hasApiKey || apiKeyError;
          console.log("Using public agents mode:", usePublicMode);
          
          const attemptInit = (attempt = 0) => {
            try {
              window.ElevenLabsConvai.init({
                language: language || 'it',
                usePublicAgents: true
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
          
          attemptInit();
        } else if (!window.ElevenLabsConvai && initAttempt < MAX_INIT_ATTEMPTS) {
          console.log(`ElevenLabs API not found. Attempt ${initAttempt + 1}/${MAX_INIT_ATTEMPTS}`);
          
          setTimeout(() => {
            setInitAttempt(prev => prev + 1);
          }, Math.pow(2, initAttempt) * 1000);
        } else if (!window.ElevenLabsConvai && initAttempt >= MAX_INIT_ATTEMPTS) {
          console.error("Failed to find ElevenLabs API after multiple attempts");
          setInitializationError(true);
          
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
  }, [language, initAttempt, scriptLoaded, apiKeyLoaded, hasApiKey, apiKeyError]);

  const checkAudioPermissions = async () => {
    try {
      const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioCtx;
      
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      window.audioStream = stream;
      
      setPermissionError(false);
      return true;
    } catch (err) {
      console.error("Audio permission error:", err);
      setPermissionError(true);
      
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

  useEffect(() => {
    if (hiddenWidgetRef.current) {
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement) {
        widgetElement.setAttribute('language', language || 'it');
      }
    }
  }, [language]);

  useEffect(() => {
    const checkConnectionStatus = () => {
      if (!hiddenWidgetRef.current || !callActive) return;
      
      const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
      if (widgetElement && widgetElement.shadowRoot) {
        const activeCallIndicators = widgetElement.shadowRoot.querySelectorAll(
          '.active-call, .call-active, [data-status="connected"], [class*="active"], [class*="connected"]'
        );
        
        const errorElements = widgetElement.shadowRoot.querySelectorAll(
          '.error-state, .connection-error, [data-status="error"], [class*="error"]'
        );

        const permissionElements = widgetElement.shadowRoot.querySelectorAll(
          '[class*="permission"], [class*="allow"], [class*="access"]'
        );
        
        if (activeCallIndicators.length === 0 && callActive) {
          console.log("ElevenLabs call appears to have ended");
          setCallActive(false);
          setButtonClicked(false);
        }
        
        if (errorElements.length > 0) {
          console.error("ElevenLabs connection appears to have an error");
          
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
        
        if (permissionElements.length > 0) {
          console.log("Permission dialog detected");
          setPermissionError(true);
        }
      }
    };
    
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

  const stopElevenLabsCall = () => {
    console.log("Attempting to stop ElevenLabs call...");
    
    if (!hiddenWidgetRef.current) return;
    
    const widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (widgetElement && widgetElement.shadowRoot) {
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
            
            setCallActive(false);
            setButtonClicked(false);
            
            return;
          }
        }
      }
      
      if (!buttonFound) {
        console.log("Could not find stop button, forcing widget reset");
        
        if (hiddenWidgetRef.current.contains(widgetElement)) {
          try {
            hiddenWidgetRef.current.removeChild(widgetElement);
            
            setButtonClicked(false);
            setCallActive(false);
            widgetInitialized.current = false;
            
            setTimeout(() => {
              if (window.ElevenLabsConvai) {
                try {
                  window.ElevenLabsConvai.init({
                    language: language || 'it',
                    usePublicAgents: true
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

  const startElevenLabsCall = async () => {
    userInitiatedRef.current = true;
    
    if (callActive) {
      console.log("Call is active, stopping call");
      setIsLoading(true);
      stopElevenLabsCall();
      setTimeout(() => setIsLoading(false), 500);
      return;
    }
    
    if (!scriptLoaded) {
      setIsLoading(true);
      
      if (typeof window.loadElevenLabsScript === 'function') {
        window.loadElevenLabsScript();
      } else {
        loadScriptDirectly();
      }
      
      toast({
        title: "Caricamento in corso",
        description: "Il servizio ElevenLabs si sta caricando. Riprova tra qualche secondo.",
      });
      
      setTimeout(() => setIsLoading(false), 2000);
      return;
    }
    
    if (scriptLoadingFailed) {
      if (manuallyRetriedRef.current < 2) {
        manuallyRetriedRef.current++;
        setScriptLoadingFailed(false);
        scriptLoadingAttempt.current = 0;
        setIsLoading(true);
        
        toast({
          title: "Nuovo tentativo",
          description: "Stiamo riprovando a caricare il servizio ElevenLabs."
        });
        
        if (typeof window.loadElevenLabsScript === 'function') {
          window.loadElevenLabsScript();
        } else {
          loadScriptDirectly();
        }
        
        setTimeout(() => setIsLoading(false), 2000);
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
    
    setConnectionError(false);
    setPermissionError(false);
    
    setButtonClicked(true);
    
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
    
    const hasPermissions = await checkAudioPermissions();
    if (!hasPermissions) {
      setIsLoading(false);
      setButtonClicked(false);
      return;
    }
    
    buttonFindAttemptsRef.current = 0;
    
    if (!widgetInitialized.current) {
      if (window.ElevenLabsConvai) {
        console.log("Re-initializing widget before call");
        try {
          window.ElevenLabsConvai.init({
            language: language || 'it',
            usePublicAgents: true
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
    
    let widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (!widgetElement) {
      console.log("Creating widget element dynamically");
      widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', AGENT_ID);
      widgetElement.setAttribute('language', language || 'it');
      hiddenWidgetRef.current.appendChild(widgetElement);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log("Widget element before clicking:", widgetElement);
    logShadowDOMElements();
    
    setTimeout(() => tryClickStartButton(0), 500);
  };

  const tryClickStartButton = (attemptNumber = 0) => {
    if (attemptNumber >= MAX_BUTTON_FIND_ATTEMPTS) {
      console.log("Max button find attempts reached, creating fresh widget");
      
      const freshWidget = document.createElement('elevenlabs-convai');
      freshWidget.setAttribute('agent-id', AGENT_ID);
      freshWidget.setAttribute('language', language || 'it');
      
      if (hiddenWidgetRef.current) {
        const oldWidget = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
        if (oldWidget) {
          hiddenWidgetRef.current.removeChild(oldWidget);
        }
        
        hiddenWidgetRef.current.appendChild(freshWidget);
        
        setTimeout(() => {
          const finalAttempt = () => {
            logShadowDOMElements();
            
            const shadowRoot = freshWidget.shadowRoot;
            if (shadowRoot) {
              console.log("Last resort: trying to click ANY button");
              const allButtons = shadowRoot.querySelectorAll('button');
              if (allButtons.length > 0) {
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
          
          setTimeout(finalAttempt, 1000);
        }, 1000);
      }
      return;
    }
    
    const widgetElement = hiddenWidgetRef.current?.querySelector('elevenlabs-convai');
    if (!widgetElement || !widgetElement.shadowRoot) {
      console.log(`Widget not ready, retrying (${attemptNumber + 1}/${MAX_BUTTON_FIND_ATTEMPTS})...`);
      
      setTimeout(() => tryClickStartButton(attemptNumber + 1), Math.pow(2, attemptNumber) * 200);
      return;
    }
    
    console.log(`Attempt ${attemptNumber + 1} to find start button`);
    
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
    
    const buttonSelectors = [
      'button:not([aria-label="Close"]):not([aria-label="Settings"])',
      'button:not([class*="close"]):not([class*="settings"])',
      'button.call-button',
      'button[class*="call"]',
      'button[class*="start"]',
      'button'
    ];
    
    const allButtons = widgetElement.shadowRoot.querySelectorAll('button');
    console.log(`Found ${allButtons.length} buttons in the shadow DOM`);
    
    let buttonClicked = false;
    for (const selector of buttonSelectors) {
      if (buttonClicked) break;
      
      const buttons = widgetElement.shadowRoot.querySelectorAll(selector);
      console.log(`Selector '${selector}' found ${buttons.length} elements`);
      
      for (const [index, button] of Array.from(buttons).entries()) {
        if (button instanceof HTMLElement && 
            !button.getAttribute('aria-label')?.includes('Close') && 
            !button.getAttribute('aria-label')?.includes('Settings') && 
            !button.classList.contains('close')) {
          
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
    
    if (!buttonClicked) {
      console.log(`No suitable button found, trying again in ${Math.pow(2, attemptNumber) * 300}ms`);
      setTimeout(() => tryClickStartButton(attemptNumber + 1), Math.pow(2, attemptNumber) * 300);
    }
  };

  useEffect(() => {
    if (initAttempt > 0 && scriptLoaded) {
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

  const handleManualRetry = () => {
    console.log("Manual retry triggered");
    setScriptLoadingFailed(false);
    scriptLoadingAttempt.current = 0;
    manuallyRetriedRef.current += 1;
    setIsLoading(true);
    
    toast({
      title: "Nuovo tentativo",
      description: "Stiamo riprovando a caricare il servizio ElevenLabs."
    });
    
    if (typeof window.loadElevenLabsScript === 'function') {
      window.loadElevenLabsScript();
    } else {
      loadScriptDirectly();
    }
    
    setTimeout(() => setIsLoading(false), 2000);
  };

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
        disabled={isLoading && !scriptLoadingFailed}
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
      
      {isLoading && !buttonClicked && !scriptLoadingFailed && (
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
