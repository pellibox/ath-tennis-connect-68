
import React, { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";
const AGENT_LINK = "https://elevenlabs.io/app/talk-to?agent_id=jJMZr28UE8hDLsO00dmt";

const ElevenLabsConvaiWidget = () => {
  const { language } = useLanguage();

  return (
    <div className="elevenlabs-widget-container fixed bottom-4 right-4 z-50">
      <a 
        href={AGENT_LINK} 
        target="_blank" 
        rel="noopener noreferrer"
        className="bg-ath-clay text-white px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors flex items-center"
      >
        <span>Talk to AI Assistant</span>
      </a>
    </div>
  );
};

export default ElevenLabsConvaiWidget;
