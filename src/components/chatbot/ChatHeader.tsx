
import React from 'react';
import { MessageCircle, ChevronUp, Volume2, VolumeX } from 'lucide-react';

interface ChatHeaderProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
  title: string;
  isSpeaking?: boolean;
  toggleSpeech?: () => void;
  isSpeechEnabled?: boolean;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ 
  isExpanded, 
  toggleExpanded, 
  title, 
  isSpeaking,
  toggleSpeech,
  isSpeechEnabled
}) => {
  return (
    <div 
      className={`${isExpanded ? 'bg-ath-clay text-white px-3 py-2' : 'bg-ath-clay rounded-full p-2 shadow-md'} 
      cursor-pointer flex justify-center items-center transition-all duration-200`} 
      onClick={toggleExpanded}
    >
      {isExpanded ? (
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-light opacity-80">{title}</span>
          <div className="flex items-center">
            {isSpeaking && <Volume2 size={16} className="mr-1 animate-pulse" />}
            {toggleSpeech && (
              <button
                onClick={(e) => {
                  e.stopPropagation(); // Prevent toggling chatbot
                  toggleSpeech();
                }}
                className="mr-2 opacity-80 hover:opacity-100"
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
        </div>
      )}
    </div>
  );
};

export default ChatHeader;
