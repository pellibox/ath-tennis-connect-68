import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const AGENT_ID = "agent_01jz5dzd42fnhsgg2hhnp1gvn8";

const VickiWidgetContainer = () => {
  const { language } = useLanguage();

  return (
    <div 
      className="fixed z-[9998] lg:bottom-5 lg:right-5 bottom-[calc(70px+env(safe-area-inset-bottom,0px))] right-4"
      style={{ pointerEvents: 'auto' }}
    >
      <elevenlabs-convai 
        agent-id={AGENT_ID}
        language={language || 'it'}
      ></elevenlabs-convai>
    </div>
  );
};

export default VickiWidgetContainer;
