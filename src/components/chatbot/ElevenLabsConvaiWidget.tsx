
import React, { useEffect } from 'react';

const ElevenLabsConvaiWidget = () => {
  // The actual widget is injected via script tag in index.html
  // This component is just a placeholder for the widget
  
  useEffect(() => {
    // Check if the script is loaded properly
    const isScriptLoaded = document.querySelector('script[src="https://elevenlabs.io/convai-widget/index.js"]');
    
    if (!isScriptLoaded) {
      console.error("ElevenLabs Convai widget script not loaded properly");
    } else {
      console.log("ElevenLabs Convai widget script loaded");
    }
    
    // You might need to initialize the widget here if required by the ElevenLabs API
    // This is just a placeholder for any initialization code
  }, []);
  
  return (
    <div className="elevenlabs-widget-container fixed bottom-4 right-4 z-50">
      <elevenlabs-convai agent-id="jJMZr28UE8hDLsO00dmt"></elevenlabs-convai>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
