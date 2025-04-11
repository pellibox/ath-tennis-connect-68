
import { useRef } from 'react';
import { toast } from '@/hooks/use-toast';

const MAX_BUTTON_FIND_ATTEMPTS = 7;

interface UseWidgetInteractionsProps {
  scriptLoaded: boolean;
  apiKeyLoaded: boolean;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  buttonClicked: boolean;
  setButtonClicked: (value: boolean) => void;
  callActive: boolean;
  setCallActive: (value: boolean) => void;
  connectionError: boolean;
  setConnectionError: (value: boolean) => void;
  permissionError: boolean;
  setPermissionError: (value: boolean) => void;
  hiddenWidgetRef: React.RefObject<HTMLDivElement>;
  manuallyRetriedRef: { current: number };
  loadScriptDirectly: () => void;
  userInitiatedRef: React.MutableRefObject<boolean>;
  audioContextRef: React.MutableRefObject<AudioContext | null>;
  buttonFindAttemptsRef: React.MutableRefObject<number>;
  AGENT_ID: string;
}

export const useWidgetInteractions = ({
  scriptLoaded,
  apiKeyLoaded,
  isLoading,
  setIsLoading,
  buttonClicked,
  setButtonClicked,
  callActive,
  setCallActive,
  connectionError,
  setConnectionError,
  permissionError,
  setPermissionError,
  hiddenWidgetRef,
  manuallyRetriedRef,
  loadScriptDirectly,
  userInitiatedRef,
  audioContextRef,
  buttonFindAttemptsRef,
  AGENT_ID
}: UseWidgetInteractionsProps) => {
  const widgetInitialized = useRef(false);

  const checkAudioPermissions = async () => {
    try {
      // Use a try/catch block around AudioContext creation
      try {
        const audioCtx = new (window.AudioContext || (window as any).webkitAudioContext)();
        audioContextRef.current = audioCtx;
      } catch (err) {
        console.error("Failed to create AudioContext:", err);
      }
      
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
                    language: 'it',
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

  const tryClickStartButton = (attemptNumber = 0) => {
    if (attemptNumber >= MAX_BUTTON_FIND_ATTEMPTS) {
      console.log("Max button find attempts reached, creating fresh widget");
      
      const freshWidget = document.createElement('elevenlabs-convai');
      freshWidget.setAttribute('agent-id', AGENT_ID);
      freshWidget.setAttribute('language', 'it');
      
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
            language: 'it',
            usePublicAgents: true
          });
          widgetInitialized.current = true;
        } catch (err) {
          console.error("Error initializing widget:", err);
        }
      }
    }
    
    let widgetElement = hiddenWidgetRef.current.querySelector('elevenlabs-convai');
    if (!widgetElement) {
      console.log("Creating widget element dynamically");
      widgetElement = document.createElement('elevenlabs-convai');
      widgetElement.setAttribute('agent-id', AGENT_ID);
      widgetElement.setAttribute('language', 'it');
      hiddenWidgetRef.current.appendChild(widgetElement);
      
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log("Widget element before clicking:", widgetElement);
    logShadowDOMElements();
    
    setTimeout(() => tryClickStartButton(0), 500);
  };

  const handleManualRetry = () => {
    console.log("Manual retry triggered");
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
    
    // Try harder to load the script with multiple mechanisms
    setTimeout(() => {
      if (!scriptLoaded && !window.ElevenLabsConvai) {
        console.log("Attempting additional loading methods");
        
        // Create an additional script tag in the body
        const bodyScript = document.createElement('script');
        bodyScript.src = "https://cdn.elevenlabs.io/convai/convai.js";
        bodyScript.async = true;
        document.body.appendChild(bodyScript);
        
        // Also try adding a script through document.write as last resort
        setTimeout(() => {
          if (!scriptLoaded && !window.ElevenLabsConvai) {
            try {
              const tempIframe = document.createElement('iframe');
              tempIframe.style.display = 'none';
              document.body.appendChild(tempIframe);
              const doc = tempIframe.contentDocument || tempIframe.contentWindow?.document;
              
              if (doc) {
                doc.open();
                doc.write('<script src="https://cdn.elevenlabs.io/convai/convai.js"><\/script>');
                doc.close();
                
                // If we load in the iframe, copy to main window
                setTimeout(() => {
                  try {
                    if (tempIframe.contentWindow?.ElevenLabsConvai && !window.ElevenLabsConvai) {
                      window.ElevenLabsConvai = tempIframe.contentWindow.ElevenLabsConvai;
                    }
                  } catch (e) {
                    console.error("Error copying ElevenLabsConvai from iframe:", e);
                  }
                  document.body.removeChild(tempIframe);
                }, 2000);
              }
            } catch (e) {
              console.error("Error with iframe loading attempt:", e);
            }
          }
        }, 1000);
      }
    }, 1000);
    
    setTimeout(() => setIsLoading(false), 2000);
  };

  return {
    startElevenLabsCall,
    stopElevenLabsCall,
    handleManualRetry
  };
};
