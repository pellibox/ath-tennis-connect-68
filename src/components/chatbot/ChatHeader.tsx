
import React from 'react';
import { MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';

interface ChatHeaderProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isExpanded, toggleExpanded, title }) => {
  return (
    <div 
      className={`${isExpanded ? 'bg-ath-clay text-white px-4 py-3' : 'bg-ath-clay rounded-full p-3 shadow-md'} 
      cursor-pointer flex justify-between items-center transition-all duration-200`} 
      onClick={toggleExpanded}
    >
      {isExpanded ? (
        <>
          <h3 className="font-medium text-sm">{title}</h3>
          <button className="text-white focus:outline-none">
            <ChevronDown size={18} />
          </button>
        </>
      ) : (
        <button className="text-white focus:outline-none mx-auto flex items-center gap-2">
          <MessageSquare size={22} />
          <ChevronUp size={18} className="animate-bounce" />
        </button>
      )}
    </div>
  );
};

export default ChatHeader;
