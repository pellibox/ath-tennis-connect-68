import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useRealtimeChat } from '@/hooks/useRealtimeChat';
import ElevenLabsConvaiWidget from './ElevenLabsConvaiWidget';

// Custom event for communication between widgets
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';

const VickiWidgetContainer = () => {
  const { t } = useLanguage();
  const [isWidgetOpen, setIsWidgetOpen] = useState(false);
  const { 
    isConnected, 
    isConnecting, 
    isSpeaking, 
    isListening, 
    messages, 
    error, 
    connect, 
    disconnect 
  } = useRealtimeChat();

  const toggleWidget = async () => {
    if (!isWidgetOpen) {
      // When opening this widget, dispatch event to close other widgets
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, { detail: { widget: 'vicki' } });
      window.dispatchEvent(event);
      
      // Start voice call immediately
      if (!isConnected && !isConnecting) {
        console.log('Starting voice call...');
        await connect();
      }
    } else {
      // Disconnect when closing
      if (isConnected) {
        disconnect();
      }
    }
    setIsWidgetOpen(prev => !prev);
  };

  // Close widget when call ends
  useEffect(() => {
    if (isWidgetOpen && !isConnected && !isConnecting && !error) {
      setIsWidgetOpen(false);
    }
  }, [isConnected, isConnecting, isWidgetOpen, error]);

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
      {/* Unified Vicki Button - same design for all versions */}
      {!isWidgetOpen && (
        <button
          onClick={toggleWidget}
          disabled={isConnecting}
          className="fixed z-[9998] bg-gradient-to-r from-ath-clay to-ath-clay/80 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 px-4 py-2 lg:bottom-5 lg:right-5 bottom-[calc(70px+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-auto disabled:opacity-75"
          aria-label={t('vicki.askTitle')}
        >
          {/* Vicki icon */}
          <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center flex-shrink-0">
            <span className="text-black text-xs font-bold">V</span>
          </div>
          
          {/* Text */}
          <span className="text-white text-xs font-medium whitespace-nowrap">
            {isConnecting ? 'Connessione...' : t('vicki.askTitle')}
          </span>
          
          {/* Status indicator */}
          <div className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor()}`} />
        </button>
      )}

      {/* Voice Chat Interface */}
      {isWidgetOpen && (
        <div className="fixed inset-0 bg-black/50 z-[9997] flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-sm mx-4 text-center">
            <div className="mb-4">
              <div className="w-16 h-16 bg-ath-clay rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-2xl font-bold">V</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                {isConnecting ? 'Connessione in corso...' : 'Chiamata con Vicki'}
              </h3>
              {error && (
                <p className="text-red-500 text-sm mt-2">{error}</p>
              )}
            </div>
            
            <div className="space-y-3">
              {isListening && (
                <div className="text-red-500 text-sm flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                  Sto ascoltando...
                </div>
              )}
              
              {isSpeaking && (
                <div className="text-blue-500 text-sm flex items-center justify-center gap-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  Vicki sta parlando...
                </div>
              )}
              
              {isConnected && !isListening && !isSpeaking && (
                <div className="text-green-500 text-sm">
                  Connesso - Inizia a parlare
                </div>
              )}
            </div>
            
            <button
              onClick={toggleWidget}
              className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-full transition-colors"
            >
              Termina chiamata
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default VickiWidgetContainer;