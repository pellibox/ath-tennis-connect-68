
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { useChatbot } from '@/hooks/useChatbot';

const ChatbotWidget = () => {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();
  const { 
    messages, 
    sendMessage, 
    isProcessing, 
    startListening, 
    stopListening, 
    isListening 
  } = useChatbot();

  const toggleExpanded = () => {
    setExpanded(prev => !prev);
  };

  // Show welcome message when first expanded
  useEffect(() => {
    if (expanded && messages.length === 0) {
      // Add welcome message but don't send to API
      sendMessage(t('chatbot.welcomeMessage') || "Benvenuto! Come posso aiutarti?", true);
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotWidget;
