
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { useChatbot } from '@/hooks/useChatbot';
import { Volume2, VolumeX } from 'lucide-react';

const ChatbotWidget = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const { 
    messages, 
    sendMessage, 
    isProcessing, 
    startListening, 
    stopListening, 
    isListening,
    isSpeaking,
    toggleSpeech,
    isSpeechEnabled
  } = useChatbot();

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };

  // Show welcome message when first expanded
  useEffect(() => {
    if (expanded && messages.length === 0) {
      // Add welcome message but don't send to API
      sendMessage(t('chatbot.welcomeMessage') || "Ciao! Sono l'assistente virtuale di ATH. Come posso aiutarti oggi?", true);
    }
  }, [expanded, messages.length, sendMessage, t]);

  return (
    <div className="fixed bottom-20 right-5 z-50 font-swiss md:bottom-5">
      <div className={`${expanded ? 'w-[320px] md:w-[350px] bg-white rounded-lg' : ''} 
        shadow-lg overflow-hidden transition-all duration-300 ease-in-out`}>
        <ChatHeader 
          isExpanded={expanded} 
          toggleExpanded={toggleExpanded} 
          title={t('chatbot.title') || "Assistente ATH"}
          isSpeaking={isSpeaking}
          toggleSpeech={toggleSpeech}
          isSpeechEnabled={isSpeechEnabled}
        />
        
        {expanded && (
          <div className="animate-fade-in">
            <ChatMessages messages={messages} isProcessing={isProcessing} />
            <ChatInput 
              onSendMessage={sendMessage} 
              startListening={startListening}
              stopListening={stopListening}
              isListening={isListening}
            />
            <div className="flex justify-between items-center px-3 py-2 border-t border-gray-100">
              <div className="flex items-center text-xs text-gray-500">
                {isSpeaking ? (
                  <Volume2 size={14} className="animate-pulse mr-1" />
                ) : null}
              </div>
              <button 
                onClick={toggleSpeech} 
                className={`p-1.5 rounded-full ${isSpeechEnabled ? 'bg-ath-clay text-white' : 'bg-gray-200 text-gray-600'}`}
                aria-label={isSpeechEnabled ? "Disattiva risposta vocale" : "Attiva risposta vocale"}
                title={isSpeechEnabled ? "Disattiva risposta vocale" : "Attiva risposta vocale"}
              >
                {isSpeechEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotWidget;
