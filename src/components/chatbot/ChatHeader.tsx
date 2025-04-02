
import React from 'react';
import { MessageSquare } from 'lucide-react';

interface ChatHeaderProps {
  isExpanded: boolean;
  toggleExpanded: () => void;
  title: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({ isExpanded, toggleExpanded, title }) => {
  return (
    <div className="bg-ath-clay text-white px-4 py-3 cursor-pointer flex justify-between items-center" onClick={toggleExpanded}>
      <h3 className="font-medium text-sm">{title}</h3>
      <button className="text-white focus:outline-none">
        <MessageSquare size={18} />
      </button>
    </div>
  );
};

export default ChatHeader;
