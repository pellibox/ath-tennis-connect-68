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
    console.log('🎤 VickiWidget: Initializing ElevenLabs widget...');
    console.log('🎤 VickiWidget: window.ElevenLabsConvai available:', !!window.ElevenLabsConvai);
    console.log('🎤 VickiWidget: widgetRef.current:', !!widgetRef.current);
    console.log('🎤 VickiWidget: language:', language);

    const initWidget = () => {
      console.log('🎤 VickiWidget: Starting widget initialization');
      
      if (window.ElevenLabsConvai && widgetRef.current) {
        try {
          // Initialize widget
          console.log('🎤 VickiWidget: Calling ElevenLabsConvai.init');
          window.ElevenLabsConvai.init({
            language: language || 'it',
            usePublicAgents: true
          });

          // Wait a bit for the widget to be created
          setTimeout(() => {
            const widget = widgetRef.current?.querySelector('elevenlabs-convai') as any;
            console.log('🎤 VickiWidget: Widget found:', !!widget);
            
            if (widget) {
              console.log('🎤 VickiWidget: Setting up event listeners');
              
              // Use proper event names for ElevenLabs widget
              widget.addEventListener('conversation-started', () => {
                console.log('🎤 ElevenLabs: conversation started');
                setIsConnected(true);
                setIsConnecting(false);
                setError(null);
              });

              widget.addEventListener('conversation-ended', () => {
                console.log('🎤 ElevenLabs: conversation ended');
                setIsConnected(false);
                setIsConnecting(false);
                setIsSpeaking(false);
                setIsListening(false);
              });

              widget.addEventListener('agent-speaking-started', () => {
                console.log('🎤 ElevenLabs: agent speaking started');
                setIsSpeaking(true);
                setIsListening(false);
              });

              widget.addEventListener('agent-speaking-ended', () => {
                console.log('🎤 ElevenLabs: agent speaking ended');
                setIsSpeaking(false);
              });

              widget.addEventListener('user-speaking-started', () => {
                console.log('🎤 ElevenLabs: user speaking started');
                setIsListening(true);
                setIsSpeaking(false);
              });

              widget.addEventListener('user-speaking-ended', () => {
                console.log('🎤 ElevenLabs: user speaking ended');
                setIsListening(false);
              });

              widget.addEventListener('error', (event: any) => {
                console.error('🎤 ElevenLabs error:', event.detail || event);
                setError('Errore di connessione');
                setIsConnecting(false);
                setIsConnected(false);
              });

              console.log('🎤 VickiWidget: Event listeners setup complete');
            } else {
              console.warn('🎤 VickiWidget: Widget element not found after init');
            }
          }, 500);
          
        } catch (err) {
          console.error('🎤 VickiWidget: Error during initialization:', err);
          setError('Errore di inizializzazione');
        }
      } else {
        console.log('🎤 VickiWidget: Missing requirements - ElevenLabsConvai:', !!window.ElevenLabsConvai, 'widgetRef:', !!widgetRef.current);
      }
    };

    // Wait for the widget script to load
    if (window.ElevenLabsConvai) {
      console.log('🎤 VickiWidget: ElevenLabsConvai already available');
      initWidget();
    } else {
      console.log('🎤 VickiWidget: Waiting for ElevenLabsConvai to load...');
      let attempts = 0;
      const maxAttempts = 50; // 5 seconds max
      
      const checkWidget = setInterval(() => {
        attempts++;
        console.log(`🎤 VickiWidget: Check attempt ${attempts}/${maxAttempts}`);
        
        if (window.ElevenLabsConvai) {
          console.log('🎤 VickiWidget: ElevenLabsConvai now available!');
          initWidget();
          clearInterval(checkWidget);
        } else if (attempts >= maxAttempts) {
          console.error('🎤 VickiWidget: ElevenLabsConvai failed to load after 5 seconds');
          setError('Widget non disponibile');
          clearInterval(checkWidget);
        }
      }, 100);

      return () => clearInterval(checkWidget);
    }
  }, [language]);

  const toggleConversation = async () => {
    console.log('🎤 VickiWidget: toggleConversation called, isConnected:', isConnected);
    
    if (!isConnected) {
      try {
        setError(null);
        setIsConnecting(true);
        console.log('🎤 VickiWidget: Attempting to start conversation...');
        
        // Find the native widget
        const widget = widgetRef.current?.querySelector('elevenlabs-convai') as any;
        console.log('🎤 VickiWidget: Widget found for start:', !!widget);
        
        if (widget) {
          // Try different methods to start the conversation
          if (typeof widget.startConversation === 'function') {
            console.log('🎤 VickiWidget: Calling widget.startConversation()');
            await widget.startConversation();
          } else if (typeof widget.start === 'function') {
            console.log('🎤 VickiWidget: Calling widget.start()');
            await widget.start();
          } else if (typeof widget.click === 'function') {
            console.log('🎤 VickiWidget: Calling widget.click()');
            widget.click();
          } else {
            // Try to trigger a click event
            console.log('🎤 VickiWidget: Dispatching click event');
            widget.dispatchEvent(new Event('click'));
          }
        } else {
          console.warn('🎤 VickiWidget: No widget found to start conversation');
          setError('Widget non trovato');
          setIsConnecting(false);
        }
      } catch (err) {
        console.error('🎤 VickiWidget: Failed to start conversation:', err);
        setError('Impossibile avviare la conversazione');
        setIsConnecting(false);
      }
    } else {
      try {
        console.log('🎤 VickiWidget: Attempting to end conversation...');
        
        // Find the native widget
        const widget = widgetRef.current?.querySelector('elevenlabs-convai') as any;
        console.log('🎤 VickiWidget: Widget found for end:', !!widget);
        
        if (widget) {
          // Try different methods to end the conversation
          if (typeof widget.endConversation === 'function') {
            console.log('🎤 VickiWidget: Calling widget.endConversation()');
            await widget.endConversation();
          } else if (typeof widget.stop === 'function') {
            console.log('🎤 VickiWidget: Calling widget.stop()');
            await widget.stop();
          } else if (typeof widget.close === 'function') {
            console.log('🎤 VickiWidget: Calling widget.close()');
            await widget.close();
          }
        }
      } catch (err) {
        console.error('🎤 VickiWidget: Failed to end conversation:', err);
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
      {/* Native ElevenLabs widget - temporarily visible for debugging */}
      <div ref={widgetRef} style={{ 
        position: 'fixed', 
        bottom: '100px', 
        right: '10px', 
        zIndex: 9999,
        opacity: 0.1, // Make it barely visible for debugging
        pointerEvents: 'none' // Prevent interaction with the debug widget
      }}>
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