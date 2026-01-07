import React, { useState, useCallback } from 'react';
import { useConversation } from '@elevenlabs/react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useIsMobile } from '@/hooks/use-mobile';
import { Mic, MicOff, Loader2 } from 'lucide-react';

const AGENT_ID = "agent_01jz5dzd42fnhsgg2hhnp1gvn8";

const VickiWidgetContainer = () => {
  const { language, t } = useLanguage();
  const isMobile = useIsMobile();
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const conversation = useConversation({
    onConnect: () => {
      console.log('🎤 Vicki: Connected');
      setIsConnecting(false);
      setError(null);
    },
    onDisconnect: () => {
      console.log('🎤 Vicki: Disconnected');
      setIsConnecting(false);
    },
    onError: (err) => {
      console.error('🎤 Vicki: Error', err);
      setError('Errore di connessione');
      setIsConnecting(false);
    },
    onMessage: (message) => {
      console.log('🎤 Vicki: Message', message);
    },
  });

  const startConversation = useCallback(async () => {
    if (conversation.status === 'connected') {
      await conversation.endSession();
      return;
    }

    try {
      setError(null);
      setIsConnecting(true);
      
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });
      
      // Start conversation with public agent (no auth required)
      await conversation.startSession({
        agentId: AGENT_ID,
      } as any);
    } catch (err) {
      console.error('🎤 Vicki: Failed to start', err);
      setError('Abilita il microfono');
      setIsConnecting(false);
    }
  }, [conversation]);

  const isConnected = conversation.status === 'connected';
  const isSpeaking = conversation.isSpeaking;

  const getStatusColor = () => {
    if (isConnecting) return 'bg-yellow-400 animate-pulse';
    if (isConnected && isSpeaking) return 'bg-blue-400 animate-pulse';
    if (isConnected) return 'bg-green-400 animate-pulse';
    if (error) return 'bg-red-400';
    return 'bg-white';
  };

  const getButtonText = () => {
    if (error) return error;
    if (isConnecting) return 'Connessione...';
    if (isConnected && isSpeaking) return 'Vicki parla...';
    if (isConnected) return 'Ti ascolto...';
    return t('vicki.askTitle') || 'Chiedi a Vicki';
  };

  return (
    <button
      onClick={startConversation}
      disabled={isConnecting}
      className={`
        fixed z-[9998] 
        bg-gradient-to-r from-ath-clay to-ath-clay/80 
        rounded-full shadow-lg hover:shadow-xl 
        transition-all duration-300 hover:scale-105 active:scale-95 
        flex items-center justify-center gap-2 px-4 py-2.5
        lg:bottom-5 lg:right-5 
        ${isMobile ? 'bottom-[calc(70px+env(safe-area-inset-bottom,0px))] left-1/2 -translate-x-1/2' : ''}
        disabled:opacity-75
        ${isConnected ? 'ring-2 ring-green-400 ring-offset-2' : ''}
      `}
      aria-label={isConnected ? 'Termina conversazione' : 'Chiedi a Vicki'}
    >
      {/* Vicki Logo */}
      <div className="relative flex-shrink-0">
        <img 
          src="/lovable-uploads/dc679c8d-60cd-4841-a42c-0907926b7ef5.png" 
          alt="Vicki" 
          className={`w-8 h-8 object-contain transition-all ${isConnecting ? 'animate-pulse' : ''}`}
        />
        {/* Status indicator dot */}
        <div className={`absolute -top-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-ath-clay ${getStatusColor()}`} />
      </div>
      
      {/* Text */}
      <span className="text-white text-sm font-medium whitespace-nowrap">
        {getButtonText()}
      </span>
    </button>
  );
};

export default VickiWidgetContainer;
