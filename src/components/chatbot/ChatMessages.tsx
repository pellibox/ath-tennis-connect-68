
import React, { useEffect, useRef } from 'react';
import { Message } from '@/hooks/useChatbot';

interface ChatMessagesProps {
  messages: Message[];
  isProcessing: boolean;
}

const ChatMessages: React.FC<ChatMessagesProps> = ({ messages, isProcessing }) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="h-[300px] overflow-y-auto p-3 bg-gray-50">
      {messages.map((message, index) => (
        <div 
          key={index} 
          className={`max-w-[85%] mb-2 p-2 rounded-lg ${
            message.role === 'user' 
              ? 'bg-ath-clay bg-opacity-10 ml-auto' 
              : 'bg-white border border-gray-200 mr-auto'
          }`}
        >
          <p className="text-sm">{message.content}</p>
        </div>
      ))}
      
      {isProcessing && (
        <div className="bg-white border border-gray-200 max-w-[85%] p-2 rounded-lg mr-auto mb-2">
          <p className="text-gray-500 text-sm">...</p>
        </div>
      )}
      
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatMessages;
