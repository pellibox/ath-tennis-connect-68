
import React from 'react';
import { MessageCircle, ChevronUp, Volume2, VolumeX, Mic, MicOff } from 'lucide-react';

interface ChatHeaderProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
  title: string;
  isSpeaking?: boolean;
  toggleSpeech?: () => void;
  isSpeechEnabled?: boolean;
  isListening?: boolean;
  toggleListening?: () => void;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  isExpanded, 
  toggleExpanded, 
  title, 
  isSpeaking,
  toggleSpeech,
  isSpeechEnabled,
  isListening,
  toggleListening
}) => {
  return (
    <div 
      className={`${isExpanded ? 'bg-ath-clay text-white px-3 py-2' : 'bg-ath-clay rounded-full p-2 shadow-md'} 
      cursor-pointer flex justify-center items-center transition-all duration-200`} 
      onClick={toggleExpanded}
    >
      {isExpanded ? (
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-light opacity-80">
            {title}
            {isSpeaking && <span className="ml-1 animate-pulse">•</span>}
          </span>
          <div className="flex items-center space-x-2">
            {toggleListening && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling chatbot
                  toggleListening();
                }}
                className={`opacity-80 hover:opacity-100 ${isListening ? 'text-red-300' : ''}`}
                aria-label={isListening ? "Smetti di ascoltare" : "Inizia ad ascoltare"}
              >
                {isListening ? <MicOff size={16} /> : <Mic size={16} />}
              </button>
            )}
            {toggleSpeech && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling chatbot
                  toggleSpeech();
                }}
                className="opacity-80 hover:opacity-100"
                aria-label={isSpeechEnabled ? "Disattiva audio" : "Attiva audio"}
              >
                {isSpeechEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
              </button>
            )}
            <MessageCircle size={16} className="opacity-70" />
          </div>
        </div>
      ) : (
        <div className="relative">
          <MessageCircle size={20} className="text-white" />
          <ChevronUp 
            size={14} 
            className="absolute -top-1 -right-1 text-white animate-bounce opacity-70" 
          />
          {isListening && (
            <Mic 
              size={14} 
              className="absolute -top-1 -left-1 text-red-500 animate-pulse" 
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
