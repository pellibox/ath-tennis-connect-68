
import React, { useEffect, useState } from 'react';
import { useElevenLabsAuth } from '@/hooks/useElevenLabsAuth';
import { useLanguage } from '@/contexts/LanguageContext';

// Agent ID for the ElevenLabs Convai widget
const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const ElevenLabsConvaiWidget = () => {
  const { currentLanguage } = useLanguage();
  const [widgetInitialized, setWidgetInitialized] = useState(false);
  const { signedUrl, error, isLoading } = useElevenLabsAuth(AGENT_ID);
  
  useEffect(() => {
    // Check if the script is loaded properly
    const isScriptLoaded = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    
    if (!isScriptLoaded) {
      console.error("ElevenLabs Convai widget script not loaded properly");
      return;
    } else {
      console.log("ElevenLabs Convai widget script loaded");
    }
    
    // Create a function to initialize the widget with the current language
    const initWidget = () => {
      try {
        // Check if the global ElevenLabs object exists
        if (window.ElevenLabsConvai) {
          // Initialize the widget
          window.ElevenLabsConvai?.init({
            language: currentLanguage || 'it', // Default to Italian, use the app's language context
            usePublicAgents: true // Use public agents mode as we don't have a signed URL
          });
          setWidgetInitialized(true);
          console.log("ElevenLabs Convai widget initialized");
        } else {
          console.warn("ElevenLabs Convai SDK not loaded yet, will retry");
          // If the ElevenLabs object isn't available yet, retry after a small delay
          setTimeout(initWidget, 1000);
        }
      } catch (e) {
        console.error("Error initializing ElevenLabs Convai widget:", e);
      }
    };
    
    // Initialize the widget if it hasn't been initialized yet
    if (!widgetInitialized) {
      initWidget();
    }
  }, [currentLanguage, widgetInitialized]);
  
  // Log any authentication errors
  useEffect(() => {
    if (error) {
      console.error("ElevenLabs authentication error:", error);
    }
  }, [error]);
  
  return (
    <div className="elevenlabs-widget-container fixed bottom-4 right-4 z-50">
      {isLoading ? (
        <div className="p-4 bg-white rounded-lg shadow flex items-center justify-center">
          <div className="animate-spin h-5 w-5 border-2 border-ath-clay border-t-transparent rounded-full mr-2"></div>
          <span>Loading assistant...</span>
        </div>
      ) : (
        <elevenlabs-convai 
          agent-id={AGENT_ID}
          language={currentLanguage || 'it'} // Set the language attribute
        ></elevenlabs-convai>
      )}
    </div>
  );
};

export default ElevenLabsConvaiWidget;
