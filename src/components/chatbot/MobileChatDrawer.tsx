
import React, { useState, useEffect } from 'react';
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer"
import { useChatbot } from '@/hooks/useChatbot';
import { useLanguage } from '@/contexts/LanguageContext';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { Volume2, VolumeX, Mic, MicOff } from 'lucide-react';

interface MobileChatDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileChatDrawer: React.FC<MobileChatDrawerProps> = ({ open, onOpenChange }) => {
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

  // Show welcome message when first opened
  useEffect(() => {
    if (open && messages.length === 0) {
      // Add welcome message but don't send to API
      sendMessage(t('chatbot.welcomeMessage') || "Ciao! Sono l'assistente virtuale di ATH. Come posso aiutarti oggi?", true);
    }
  }, [open, messages.length, sendMessage, t]);

  // Auto-start listening on open if no messages yet
  useEffect(() => {
    if (open && messages.length <= 1 && !isListening && !isSpeaking) {
      // Small delay to allow UI to render first
      const timer = setTimeout(() => {
        startListening();
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [open, messages.length, startListening, isListening, isSpeaking]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader className="border-b border-gray-100 pb-2">
          <DrawerTitle className="text-base flex items-center justify-between">
            <span>{t('chatbot.title') || "Assistente ATH"}</span>
            <div className="flex gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  isListening ? stopListening() : startListening();
                }} 
                className={`p-1.5 rounded-full ${isListening ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                {isListening ? <MicOff size={14} /> : <Mic size={14} />}
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSpeech();
                }} 
                className={`p-1.5 rounded-full ${isSpeechEnabled ? 'bg-ath-clay text-white' : 'bg-gray-200 text-gray-600'}`}
              >
                {isSpeechEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
              </button>
            </div>
          </DrawerTitle>
        </DrawerHeader>
        <div className="h-[50vh] flex flex-col">
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
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileChatDrawer;
