import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ElevenLabsConvaiWidget from './ElevenLabsConvaiWidget';

// Custom event for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';

const VickiWidgetContainer = () => {
  const { t } = useLanguage();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const toggleWidget = async () => {
    if (!isWidgetOpen) {
      // Apri il widget ElevenLabs
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, { detail: { widget: 'vicki' } });
      window.dispatchEvent(event);
      
      setIsWidgetOpen(true);
      setIsConnecting(true);
      setError(null);
      
      // Simula connessione
      setTimeout(() => {
        setIsConnecting(false);
        setIsConnected(true);
      }, 1000);
    } else {
      // Chiudi il widget
      setIsWidgetOpen(false);
      setIsConnected(false);
      setIsConnecting(false);
      setIsSpeaking(false);
      setIsListening(false);
    }
  };


  // Get status indicator color
  const getStatusColor = () => {
    if (isConnecting) return "bg-yellow-400";
    if (isConnected && isSpeaking) return "bg-blue-400 animate-pulse";
    if (isConnected && isListening) return "bg-red-400 animate-pulse";
    if (isConnected) return "bg-green-400";
    return "bg-gray-400";
  };

  return (
    <>
      <button
        onClick={toggleWidget}
        disabled={isConnecting}
        className="fixed z-[9998] bg-gradient-to-r from-ath-clay to-ath-clay/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 px-4 py-2 lg:bottom-5 lg:right-5 bottom-[calc(70px+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto disabled:opacity-75"
        aria-label={getButtonLabel()}
        title={getButtonLabel()}
      >
        {/* Vicki icon */}
        <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
          isConnected ? 'bg-green-400' : 'bg-white'
        }`}>
          <span className={`text-xs font-bold ${isConnected ? 'text-white' : 'text-black'}`}>V</span>
        </div>
        
        {/* Text dinamico */}
        <span className="text-white text-xs font-medium whitespace-nowrap">
          {getButtonText()}
        </span>
        
        {/* Status indicator con animazioni */}
        <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor()}`} />
        
        {/* Mostra errore se presente */}
        {error && (
          <div className="absolute -top-8 left-0 right-0 bg-red-500 text-white text-xs px-2 py-1 rounded text-center">
            {error}
          </div>
        )}
      </button>
      
      {/* Widget ElevenLabs */}
      {isWidgetOpen && (
        <ElevenLabsConvaiWidget 
          isOpen={isWidgetOpen} 
          onClose={() => toggleWidget()} 
        />
      )}
    </>
  );

  function getButtonText() {
    if (error) return 'Errore - Riprova';
    if (isConnecting) return 'Connessione...';
    if (isConnected && isSpeaking) return 'Vicki parla...';
    if (isConnected && isListening) return 'Ti ascolto...';
    if (isWidgetOpen) return 'Chiudi Vicki';
    return t('vicki.askTitle');
  }

  function getButtonLabel() {
    if (isWidgetOpen) return 'Chiudi chat con Vicki';
    return t('vicki.askTitle');
  }
};

export default VickiWidgetContainer;