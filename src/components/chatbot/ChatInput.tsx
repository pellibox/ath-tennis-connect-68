
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string, skipApi?: boolean) => void;
  startListening: () => void;
  stopListening: () => void;
  isListening: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  startListening, 
  stopListening, 
  isListening 
}) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSendMessage(text);
      setText('');
    }
  };

  const toggleListening = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  // Focus input when component mounts
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-2 flex items-center">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Scrivi un messaggio..."
        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-ath-clay"
      />
      <button 
        type="button"
        onClick={toggleListening}
        className={`px-2 py-2 ${isListening ? 'bg-red-500' : 'bg-gray-200'} text-${isListening ? 'white' : 'gray-700'}`}
      >
        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
      </button>
      <button 
        type="submit" 
        className="px-3 py-2 bg-ath-clay text-white rounded-r-md"
        disabled={!text.trim()}
      >
        <Send size={18} />
      </button>
    </form>
  );
};

export default ChatInput;
