import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const VickiWidgetContainer = () => {
  const { t, language } = useLanguage();
  const [error, setError] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Initialize the native ElevenLabs widget
  useEffect(() => {
    const initWidget = () => {
      if (window.ElevenLabsConvai && widgetRef.current) {
        // Initialize widget
        window.ElevenLabsConvai.init({
          language: language || 'it',
          usePublicAgents: true
        });

        // Listen to widget events
        const widget = widgetRef.current.querySelector('elevenlabs-convai');
        if (widget) {
          widget.addEventListener('connect', () => {
            console.log('ElevenLabs connected');
            setIsConnected(true);
            setIsConnecting(false);
            setError(null);
          });

          widget.addEventListener('disconnect', () => {
            console.log('ElevenLabs disconnected');
            setIsConnected(false);
            setIsConnecting(false);
            setIsSpeaking(false);
            setIsListening(false);
          });

          widget.addEventListener('speaking-start', () => {
            setIsSpeaking(true);
            setIsListening(false);
          });

          widget.addEventListener('speaking-end', () => {
            setIsSpeaking(false);
          });

          widget.addEventListener('listening-start', () => {
            setIsListening(true);
            setIsSpeaking(false);
          });

          widget.addEventListener('listening-end', () => {
            setIsListening(false);
          });

          widget.addEventListener('error', (event: any) => {
            console.error('ElevenLabs error:', event.detail);
            setError('Errore di connessione');
            setIsConnecting(false);
            setIsConnected(false);
          });
        }
      }
    };

    // Wait for the widget script to load
    if (window.ElevenLabsConvai) {
      initWidget();
    } else {
      const checkWidget = setInterval(() => {
        if (window.ElevenLabsConvai) {
          initWidget();
          clearInterval(checkWidget);
        }
      }, 100);

      return () => clearInterval(checkWidget);
    }
  }, [language]);

  const toggleConversation = async () => {
    if (!isConnected) {
      try {
        setError(null);
        setIsConnecting(true);
        
        // Find and trigger the native widget
        const widget = widgetRef.current?.querySelector('elevenlabs-convai') as any;
        if (widget && widget.startConversation) {
          widget.startConversation();
        }
      } catch (err) {
        console.error('Failed to start conversation:', err);
        setError('Impossibile avviare la conversazione');
        setIsConnecting(false);
      }
    } else {
      try {
        // Find and stop the native widget
        const widget = widgetRef.current?.querySelector('elevenlabs-convai') as any;
        if (widget && widget.endConversation) {
          widget.endConversation();
        }
      } catch (err) {
        console.error('Failed to end conversation:', err);
      }
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

  const getButtonText = () => {
    if (error) return 'Errore - Riprova';
    if (isConnecting) return 'Connessione...';
    if (isConnected && isSpeaking) return 'Vicki parla...';
    if (isConnected && isListening) return 'Ti ascolto...';
    if (isConnected) return 'Termina conversazione';
    return t('vicki.askTitle');
  };

  const getButtonLabel = () => {
    if (isConnected) return 'Termina conversazione con Vicki';
    return t('vicki.askTitle');
  };

  return (
    <div>
      {/* Hidden native ElevenLabs widget */}
      <div ref={widgetRef} style={{ display: 'none' }}>
        <elevenlabs-convai 
          agent-id="agent_01jz5dzd42fnhsgg2hhnp1gvn8"
          language={language || 'it'}
        ></elevenlabs-convai>
      </div>

      {/* Custom UI Button */}
      <button
        onClick={toggleConversation}
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
    </div>
  );
};

export default VickiWidgetContainer;