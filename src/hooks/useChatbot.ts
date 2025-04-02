
import { useState, useCallback, useEffect } from 'react';
import { useSpeechRecognition } from './useSpeechRecognition';
import { useSpeechSynthesis } from './useSpeechSynthesis';
import { toast } from '@/components/ui/use-toast';

export interface Message {
  content: string;
  role: 'user' | 'assistant' | 'system';
}

// Pre-defined API key
const OPENAI_API_KEY = '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';

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  
  // Speech synthesis hook
  const { speak, stop: stopSpeaking } = useSpeechSynthesis();

  // Speech recognition hook with callbacks
  const onSpeechResult = useCallback((text: string) => {
    if (text.trim()) {
      setMessages(prev => [...prev, { role: 'user', content: text }]);
      processMessage(text);
    }
  }, []);

  const {
    isListening,
    startListening: startSpeechListening,
    stopListening: stopSpeechListening,
    isSupported: isSpeechSupported
  } = useSpeechRecognition({ onResult: onSpeechResult });

  const startListening = useCallback(() => {
    if (isSpeechSupported) {
      startSpeechListening();
    } else {
      toast({
        title: "Errore",
        description: "Il riconoscimento vocale non è supportato nel tuo browser.",
        variant: "destructive",
      });
    }
  }, [isSpeechSupported, startSpeechListening]);

  const stopListening = useCallback(() => {
    if (isSpeechSupported) {
      stopSpeechListening();
    }
  }, [isSpeechSupported, stopSpeechListening]);

  // Process message and get AI response
  const processMessage = useCallback(async (userMessage: string) => {
    setIsProcessing(true);
    
    try {
      // Prepare conversation history with system prompt
      const conversationHistory: Message[] = [
        {
          role: 'system',
          content: `Sei l'assistente virtuale di ATH (Advanced Tennis Hub), un centro di eccellenza per il tennis 
          che utilizza tecnologia avanzata e competenze umane per formare tennisti di ogni età.
          Rispondi in modo conciso, utile e cordiale. Le tue risposte devono essere in prima persona.
          Sei specializzato in:
          - Informazioni sui programmi ATH per professionisti, junior, adulti e altri
          - Tecnologia di analisi tennis chiamata Vicki
          - Strutture e attrezzature disponibili presso ATH
          - Metodi di allenamento basati su tecnologia e personalizzazione
          - Raccomandazioni personalizzate basate sull'età e livello del giocatore
          Non parlare mai di prezzi specifici o dettagli che non conosci. 
          Se non conosci la risposta, proponi di contattare direttamente ATH.`
        }
      ];

      // Add conversation history (limit to last 10 messages for context)
      const recentMessages = messages.slice(-10);
      conversationHistory.push(...recentMessages);
      
      // Add the current user message
      conversationHistory.push({ role: 'user', content: userMessage });

      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${OPENAI_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: conversationHistory,
          temperature: 0.7,
          max_tokens: 150
        })
      });

      if (!response.ok) {
        const error = await response.json();
        console.error("OpenAI API error:", error);
        
        throw new Error('Errore nel contattare il servizio di intelligenza artificiale. Per favore, riprova più tardi.');
      }

      const data = await response.json();
      const assistantMessage = data.choices[0].message.content;

      // Add assistant response to messages
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: assistantMessage }
      ]);

      // Speak the response
      speak(assistantMessage);
      
    } catch (error) {
      console.error('Error processing message:', error);
      setMessages(prev => [
        ...prev,
        { 
          role: 'assistant', 
          content: error instanceof Error ? error.message : 'Si è verificato un errore. Riprova più tardi.' 
        }
      ]);
      
      toast({
        title: "Errore",
        description: error instanceof Error ? error.message : "Si è verificato un errore con l'assistente virtuale",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  }, [messages, speak]);

  const sendMessage = useCallback((message: string, skipApi = false) => {
    // Add user message to state
    if (!skipApi) {
      setMessages(prev => [...prev, { role: 'user', content: message }]);
      processMessage(message);
    } else {
      // Just add the message without API processing (for welcome message)
      setMessages(prev => [...prev, { role: 'assistant', content: message }]);
    }
  }, [processMessage]);

  return {
    messages,
    sendMessage,
    isProcessing,
    isListening,
    startListening,
    stopListening
  };
};
