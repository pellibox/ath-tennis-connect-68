
import { useState, useCallback, useEffect } from 'react';
import { useSpeechRecognition } from './useSpeechRecognition';
import { useSpeechSynthesis } from './useSpeechSynthesis';

export interface Message {
  content: string;
  role: 'user' | 'assistant' | 'system';
}

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  // Load API key from localStorage
  useEffect(() => {
    const savedApiKey = localStorage.getItem('openai-api-key');
    if (savedApiKey) {
      setApiKey(savedApiKey);
    }
  }, []);

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
      alert('Il riconoscimento vocale non è supportato nel tuo browser.');
    }
  }, [isSpeechSupported, startSpeechListening]);

  const stopListening = useCallback(() => {
    if (isSpeechSupported) {
      stopSpeechListening();
    }
  }, [isSpeechSupported, stopSpeechListening]);

  // Process message and get AI response
  const processMessage = useCallback(async (userMessage: string) => {
    if (!apiKey) {
      // Ask for API key if not set
      const newApiKey = prompt(
        'Per utilizzare l\'assistente vocale, inserisci la tua chiave API OpenAI:'
      );
      
      if (!newApiKey) {
        setMessages(prev => [
          ...prev, 
          { 
            role: 'assistant', 
            content: 'È necessaria una chiave API OpenAI per continuare. Riprova più tardi.' 
          }
        ]);
        return;
      }
      
      localStorage.setItem('openai-api-key', newApiKey);
      setApiKey(newApiKey);
    }

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
          "Authorization": `Bearer ${apiKey}`
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
        
        // Check if the API key is invalid
        if (response.status === 401) {
          localStorage.removeItem('openai-api-key');
          setApiKey(null);
          throw new Error('API key non valida. Per favore, fornisci una chiave API valida.');
        }
        
        throw new Error('Errore nel contattare il servizio di intelligenza artificiale.');
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
    } finally {
      setIsProcessing(false);
    }
  }, [apiKey, messages, speak]);

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
