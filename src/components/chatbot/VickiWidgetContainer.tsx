import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useConversation } from '@11labs/react';

const VickiWidgetContainer = () => {
  const { t } = useLanguage();
  const [error, setError] = useState<string | null>(null);
  
  // ElevenLabs conversation hook with proper configuration
  const conversation = useConversation({
    onConnect: () => {
      console.log('ElevenLabs connected');
    },
    onDisconnect: () => {
      console.log('ElevenLabs disconnected');
    },
    onError: (error) => {
      console.error('ElevenLabs error:', error);
      setError('Errore di connessione');
    },
    onMessage: (message) => {
      console.log('ElevenLabs message:', message);
    },
    // Override the conversation config to use new structure
    overrides: {
      agent: {
        prompt: {
          prompt: "Sei Vicki, l'assistente virtuale di ATH Tennis. Aiuti gli utenti con informazioni sui programmi di tennis, prenotazioni e domande generali. Rispondi sempre in italiano in modo cordiale e professionale.",
          // Use new structure instead of deprecated tools field
          tool_ids: [], // Add any tool IDs if needed
          built_in_tools: {
            end_call: {
              name: "end_call",
              description: "Termina la conversazione",
              response_timeout_secs: 20,
              type: "system",
              params: {
                system_tool_type: "end_call"
              }
            }
          }
        },
        firstMessage: "Ciao! Sono Vicki, la tua assistente virtuale di ATH Tennis. Come posso aiutarti oggi?",
        language: "it",
      },
      tts: {
        voiceId: "RZ9oBlQ97k7Ug7uU1Ij0"
      }
    }
  });

  // Map ElevenLabs states to our custom states
  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';
  const isSpeaking = conversation.isSpeaking;
  // For listening state, we would need to track microphone activity
  const [isListening, setIsListening] = useState(false);

  const toggleConversation = async () => {
    if (!isConnected && conversation.status === 'disconnected') {
      try {
        setError(null);
        // Replace with your actual ElevenLabs agent ID from the dashboard
        const agentId = 'agent_01jz5dzd42fnhsgg2hhnp1gvn8';
        
        
        await conversation.startSession({ agentId });
      } catch (err) {
        console.error('Failed to start conversation:', err);
        setError('Impossibile avviare la conversazione');
      }
    } else if (isConnected) {
      try {
        await conversation.endSession();
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
  );
};

export default VickiWidgetContainer;