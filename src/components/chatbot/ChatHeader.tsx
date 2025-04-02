
import React from 'react';
import { MessageCircle, ChevronUp } from 'lucide-react';

interface ChatHeaderProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isExpanded, toggleExpanded, title }) => {
  return (
    <div 
      className={`${isExpanded ? 'bg-ath-clay text-white px-3 py-2' : 'bg-ath-clay rounded-full p-2 shadow-md'} 
      cursor-pointer flex justify-center items-center transition-all duration-200`} 
      onClick={toggleExpanded}
    >
      {isExpanded ? (
        <div className="flex items-center justify-between w-full">
          <span className="text-xs font-light opacity-80">{title}</span>
          <MessageCircle size={16} className="opacity-70" />
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
