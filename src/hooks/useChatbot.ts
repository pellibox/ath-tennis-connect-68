
import { useState, useCallback, useEffect, useRef } from 'react';
import { useSpeechRecognition } from './useSpeechRecognition';
import { useSpeechSynthesis } from './useSpeechSynthesis';
import { toast } from '@/components/ui/use-toast';
import { programCategories } from '@/data/programs/categories';
import { touchTennisCategories } from '@/data/touchtennis/categories';

export interface Message {
  content: string;
  role: 'user' | 'assistant' | 'system';
}

// Pre-defined API key - considera di utilizzare una chiave API con quota sufficiente
const OPENAI_API_KEY = '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';

// Modalità di fallback quando l'API non è disponibile
const FALLBACK_MODE = true;

export const useChatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const abortControllerRef = useRef<AbortController | null>(null);
  
  // Speech synthesis hook
  const { speak, stop: stopSpeaking, isSpeaking } = useSpeechSynthesis();

  // Conoscenza del sito
  const siteKnowledge = useRef<string>('');
  
  // Inizializza la conoscenza del sito
  useEffect(() => {
    // Combina informazioni dai programmi tennis
    let knowledgeBase = 'ATH (Advanced Tennis Hub) è un centro di eccellenza per il tennis che utilizza tecnologia avanzata e competenze umane. ';
    knowledgeBase += 'La sede è in Via F. Turati, 9, 20090 Rodano MI, Italia. ';
    knowledgeBase += 'ATH offre diversi programmi: ';
    
    // Aggiungi informazioni sui programmi tennis
    programCategories.forEach(category => {
      knowledgeBase += `${category.title}: `;
      category.programs.forEach(program => {
        knowledgeBase += `${program.title} (${program.description}), `;
      });
    });
    
    // Aggiungi informazioni sui programmi touchtennis
    knowledgeBase += 'Programmi TouchTennis: ';
    touchTennisCategories.forEach(category => {
      category.programs.forEach(program => {
        knowledgeBase += `${program.title} (${program.description}), `;
      });
    });
    
    knowledgeBase += 'ATH utilizza una tecnologia avanzata chiamata Vicki per analizzare oltre 70 parametri della performance tennistica. ';
    knowledgeBase += 'Vicki monitora e analizza ogni dettaglio del gioco, fornendo insights in tempo reale. ';
    knowledgeBase += 'ATH offre programmi per ogni età e livello: principianti, intermedi, avanzati, professionisti, junior e adulti. ';
    
    siteKnowledge.current = knowledgeBase;
  }, []);

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

  // Risposte di fallback per quando l'API è down
  const getFallbackResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes('programm') || lowerCaseMessage.includes('cors')) {
      return "In ATH offriamo diversi programmi per ogni livello ed età. Abbiamo programmi Elite per atleti professionisti, programmi Junior per giovani atleti, e programmi Amatori per adulti. Ogni programma è personalizzato in base alle esigenze specifiche del giocatore.";
    }
    
    if (lowerCaseMessage.includes('vicki') || lowerCaseMessage.includes('tecnolog')) {
      return "Vicki è la nostra tecnologia proprietaria che monitora oltre 70 parametri durante il gioco. Utilizziamo sensori avanzati e telecamere ad alta velocità per analizzare ogni aspetto della performance, fornendo feedback immediato e personalizzato.";
    }
    
    if (lowerCaseMessage.includes('struttur') || lowerCaseMessage.includes('centro') || lowerCaseMessage.includes('sede')) {
      return "Il nostro centro si trova in Via F. Turati, 9, 20090 Rodano MI, Italia. Disponiamo di 6 campi monitorati con la tecnologia Vicki, aree dedicate alla preparazione atletica, e spazi per l'analisi video e la preparazione mentale.";
    }
    
    if (lowerCaseMessage.includes('contatt') || lowerCaseMessage.includes('prenotare') || lowerCaseMessage.includes('info')) {
      return "Per prenotazioni o maggiori informazioni, puoi contattarci al numero +39 02 1234567 o via email a info@ath.tennis. Saremo lieti di rispondere a tutte le tue domande.";
    }
    
    return "Come assistente virtuale di ATH, sono qui per fornirti informazioni sui nostri programmi di allenamento, la nostra tecnologia Vicki, e le nostre strutture. Come posso aiutarti in modo più specifico?";
  };

  // Process message and get AI response
  const processMessage = useCallback(async (userMessage: string) => {
    setIsProcessing(true);
    
    // Cancel any previous request
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    
    // Create new abort controller
    abortControllerRef.current = new AbortController();
    
    try {
      // Stop any ongoing speech
      stopSpeaking();
      
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
          Se non conosci la risposta, proponi di contattare direttamente ATH.
          
          Ecco informazioni aggiuntive sul sito: ${siteKnowledge.current}`
        }
      ];

      // Add conversation history (limit to last 10 messages for context)
      const recentMessages = messages.slice(-10);
      conversationHistory.push(...recentMessages);
      
      // Add the current user message
      conversationHistory.push({ role: 'user', content: userMessage });

      let assistantMessage = '';
      
      if (FALLBACK_MODE) {
        // Modalità di fallback quando l'API non è disponibile
        assistantMessage = getFallbackResponse(userMessage);
        
        // Simula una breve attesa per dare l'impressione di elaborazione
        await new Promise(resolve => setTimeout(resolve, 800));
      } else {
        // Modalità normale con API
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
          }),
          signal: abortControllerRef.current.signal
        });

        if (!response.ok) {
          const error = await response.json();
          console.error("OpenAI API error:", error);
          
          // Se c'è un errore di quota, usa la modalità fallback
          if (error.error?.type === "insufficient_quota") {
            assistantMessage = getFallbackResponse(userMessage);
          } else {
            throw new Error('Errore nel contattare il servizio di intelligenza artificiale. Per favore, riprova più tardi.');
          }
        } else {
          const data = await response.json();
          assistantMessage = data.choices[0].message.content;
        }
      }

      // Add assistant response to messages
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: assistantMessage }
      ]);

      // Speak the response
      speak(assistantMessage);
      
    } catch (error) {
      // Ignore aborted requests
      if (error instanceof DOMException && error.name === 'AbortError') {
        return;
      }
      
      console.error('Error processing message:', error);
      
      // Usa la modalità fallback in caso di errori
      const fallbackResponse = "Mi scuso, ma sto riscontrando problemi di connessione. Per informazioni immediate, puoi contattarci al +39 02 1234567 o via email a info@ath.tennis.";
      
      setMessages(prev => [
        ...prev,
        { role: 'assistant', content: fallbackResponse }
      ]);
      
      speak(fallbackResponse);
      
      toast({
        title: "Errore di connessione",
        description: "Si è verificato un problema con l'assistente virtuale. Verrà utilizzata una modalità limitata.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
      abortControllerRef.current = null;
    }
  }, [messages, speak, stopSpeaking]);

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
    stopListening,
    isSpeaking
  };
};
