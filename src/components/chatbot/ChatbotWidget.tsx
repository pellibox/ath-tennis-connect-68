
import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatHeader from './ChatHeader';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { useChatbot } from '@/hooks/useChatbot';
import { Volume2, VolumeX, Mic, MicOff } from 'lucide-react';

// Custom event name for widget communication
const WIDGET_TOGGLE_EVENT = 'ath-widget-toggle';

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
    if (!expanded) {
      // When expanding this widget, dispatch an event to close other widgets
      const event = new CustomEvent(WIDGET_TOGGLE_EVENT, { detail: { widget: 'chatbot' } });
      window.dispatchEvent(event);
    }
    setExpanded(prev => !prev);
  };
  
  // Listen for toggle events from other widgets
  useEffect(() => {
    const handleWidgetToggle = (event: CustomEvent) => {
      // If another widget is opening and this one is expanded, close this one
      if (event.detail.widget !== 'chatbot' && expanded) {
        setExpanded(false);
      }
    };
    
    // Add event listener for custom widget toggle event
    window.addEventListener(WIDGET_TOGGLE_EVENT, handleWidgetToggle as EventListener);
    
    // Clean up listener when component unmounts
    return () => {
      window.removeEventListener(WIDGET_TOGGLE_EVENT, handleWidgetToggle as EventListener);
    };
  }, [expanded]);

  // Show welcome message when first expanded
  useEffect(() => {
    if (expanded && messages.length === 0) {
      // Add welcome message but don't send to API
      sendMessage(t('chatbot.welcomeMessage') || "Ciao! Sono l'assistente virtuale di ATH. Come posso aiutarti oggi?", true);
    }
  }, [expanded, messages.length, sendMessage, t]);

  // Auto-start listening on expansion if no messages yet
  useEffect(() => {
    if (expanded && messages.length <= 1 && !isListening && !isSpeaking) {
      // Small delay to allow UI to render first
      const timer = setTimeout(() => {
        startListening();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [expanded, messages.length, startListening, isListening, isSpeaking]);

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
          isListening={isListening}
          toggleListening={() => isListening ? stopListening() : startListening()}
        />
        
        {expanded && (
          <div className="animate-fade-in">
            <ChatMessages messages={messages} isProcessing={isProcessing} />
            <ChatInput 
              onSendMessage={sendMessage} 
              startListening={startListening}
              stopListening={stopListening}
              isListening={isListening}
              isProcessing={isProcessing}
            />
            <div className="flex justify-between items-center px-3 py-2 border-t border-gray-100">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                {isSpeaking ? (
                  <div className="flex items-center">
                    <Volume2 size={14} className="animate-pulse mr-1" />
                    <span>Parlando...</span>
                  </div>
                ) : null}
                {isListening ? (
                  <div className="flex items-center">
                    <Mic size={14} className="animate-pulse text-red-500 mr-1" />
                    <span className="text-red-500">Ascoltando...</span>
                  </div>
                ) : null}
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => isListening ? stopListening() : startListening()} 
                  className={`p-1.5 rounded-full ${isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
                  aria-label={isListening ? "Smetti di ascoltare" : "Inizia ad ascoltare"}
                  title={isListening ? "Smetti di ascoltare" : "Inizia ad ascoltare"}
                  disabled={isProcessing}
                >
                  {isListening ? <MicOff size={14} /> : <Mic size={14} />}
                </button>
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatbotWidget;
