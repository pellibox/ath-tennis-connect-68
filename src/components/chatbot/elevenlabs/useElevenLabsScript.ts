
import { useState, useEffect, useRef } from 'react';

export const useElevenLabsScript = () => {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptLoadingFailed, setScriptLoadingFailed] = useState(false);
  const scriptLoadingAttempt = useRef(0);
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

    if (!window.elevenLabsScriptLoaded && !window.elevenLabsScriptFailed) {
      if (typeof window.loadElevenLabsScript === 'function') {
        console.log("Triggering script load from window method");
        window.loadElevenLabsScript();
      } else {
        console.log("Loading script directly as fallback");
        loadScriptDirectly();
      }
    }

    return () => {
      window.removeEventListener('elevenlabs-script-loaded', handleScriptLoaded);
      window.removeEventListener('elevenlabs-script-failed', handleScriptFailed);
    };
  }, []);

  const loadScriptDirectly = () => {
    if (scriptLoadingAttempt.current >= 3) {
      console.error("Failed to load script after multiple attempts");
      setScriptLoadingFailed(true);
      return;
    }
    
    cdnTimeoutsRef.current.forEach(timeout => window.clearTimeout(timeout));
    cdnTimeoutsRef.current = [];
    
    scriptLoadingAttempt.current += 1;
    
    const sources = [
      "https://cdn.elevenlabs.io/convai/convai.js",
      "https://convai.elevenlabs.io/convai.js",
      "https://storage.googleapis.com/xi-convai/convai.js",
      "https://convai-cdn.elevenlabs.io/convai.js"
    ];
    
    const source = sources[(scriptLoadingAttempt.current - 1) % sources.length];
    console.log(`Trying to load from ${source} (attempt ${scriptLoadingAttempt.current})`);
    
    const script = document.createElement('script');
    script.src = source;
    script.async = true;
    
    const timeoutId = window.setTimeout(() => {
      console.log(`Loading from ${source} timed out after 5000ms`);
      const errorEvent = new Event('error');
      script.dispatchEvent(errorEvent);
    }, 5000);
    
    cdnTimeoutsRef.current.push(timeoutId);
    
    script.onload = () => {
      window.clearTimeout(timeoutId);
      
      console.log(`Script loaded directly from ${source}`);
      setScriptLoaded(true);
      setScriptLoadingFailed(false);
      
      setTimeout(() => {
        if (window.ElevenLabsConvai) {
          try {
            window.ElevenLabsConvai.init({
              language: 'it',
              usePublicAgents: true
            });
            console.log("Widget initialized right after script load");
          } catch (err) {
            console.error("Failed to initialize widget after load:", err);
          }
        }
      }, 1000);
    };
    
    script.onerror = () => {
      window.clearTimeout(timeoutId);
      
      console.error(`Direct script loading failed from ${source}`);
      setTimeout(loadScriptDirectly, 1000);
    };
    
    document.body.appendChild(script);
  };

  return { scriptLoaded, scriptLoadingFailed, loadScriptDirectly };
};
