
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, MicOff, Volume2, Loader2 } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string, skipApi?: boolean) => void;
  startListening: () => void;
  stopListening: () => void;
  isListening: boolean;
  isProcessing?: boolean;
}

const ChatInput: React.FC<ChatInputProps> = ({ 
  onSendMessage, 
  startListening, 
  stopListening, 
  isListening,
  isProcessing = false
}) => {
  const [text, setText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() && !isProcessing) {
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
    if (!isListening) {
      inputRef.current?.focus();
    }
  }, [isListening]);

  // Placeholder change based on listening state
  const getPlaceholder = () => {
    if (isListening) {
      return "Sto ascoltando...";
    }
    if (isProcessing) {
      return "Elaborazione risposta...";
    }
    return "Scrivi un messaggio o premi il microfono per parlare...";
  };

  return (
    <form onSubmit={handleSubmit} className="border-t border-gray-200 p-2 flex items-center">
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={getPlaceholder()}
        className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-ath-clay"
        disabled={isListening || isProcessing}
      />
      <button 
        type="button"
        onClick={toggleListening}
        aria-label={isListening ? "Smetti di ascoltare" : "Inizia ad ascoltare"}
        title={isListening ? "Smetti di ascoltare" : "Inizia ad ascoltare"}
        className={`px-2 py-2 ${isListening ? 'bg-red-500' : 'bg-gray-200'} text-${isListening ? 'white' : 'gray-700'}`}
        disabled={isProcessing}
      >
        {isListening ? <MicOff size={18} /> : <Mic size={18} />}
      </button>
      <button 
        type="submit" 
        className="px-3 py-2 bg-ath-clay text-white rounded-r-md flex items-center justify-center min-w-10"
        disabled={(!text.trim() && !isListening) || isProcessing}
      >
        {isProcessing ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
      </button>
    </form>
  );
};

export default ChatInput;
