
import { useState, useCallback, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

interface UseSpeechRecognitionProps {
  onResult?: (text: string) => void;
  onError?: (error: string) => void;
  continuous?: boolean;
}

export const useSpeechRecognition = ({ 
  onResult, 
  onError, 
  continuous = true 
}: UseSpeechRecognitionProps = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { language } = useLanguage();
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Map language code to speech recognition language
  const getSpeechLanguage = useCallback((lang: string) => {
    switch (lang) {
      case 'it': return 'it-IT';
      case 'en': return 'en-US';
      case 'fr': return 'fr-FR';
      case 'de': return 'de-DE';
      default: return 'it-IT'; // Default to Italian
    }
  }, []);

  // Initialize speech recognition
  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = continuous;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = getSpeechLanguage(language);

      // Setup event handlers
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log("Speech recognized:", transcript);
        if (onResult) onResult(transcript);
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        if (onError) onError(event.error);
        setIsListening(false);
        if (event.error === 'no-speech') {
          toast({
            title: "Nessun audio rilevato",
            description: "Non ho sentito nulla. Prova a parlare più forte o verificare che il microfono funzioni.",
            variant: "destructive",
          });
        }
      };

      recognitionInstance.onend = () => {
        console.log("Speech recognition ended");
        setIsListening(false);
        
        // If in continuous mode and still flagged as listening, restart
        if (continuous && recognitionRef.current && isListening) {
          try {
            recognitionRef.current.start();
          } catch (e) {
            console.error("Failed to restart continuous listening:", e);
          }
        }
      };

      recognitionRef.current = recognitionInstance;
      setIsSupported(true);
    } else {
      console.error("Speech recognition not supported");
      setIsSupported(false);
      if (onError) onError('Speech recognition not supported');
    }
    
    // Cleanup function
    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.abort();
        } catch (e) {
          console.error("Error cleaning up speech recognition:", e);
        }
      }
    };
  }, [getSpeechLanguage, language, onError, onResult, continuous]);

  // Update recognition language when app language changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = getSpeechLanguage(language);
    }
  }, [language, getSpeechLanguage]);

  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.start();
        setIsListening(true);
        console.log("Started listening...");
      } catch (error) {
        console.error('Speech recognition error:', error);
        setIsListening(false);
        toast({
          title: "Errore microfono",
          description: "Non è stato possibile attivare il microfono. Verifica che il browser abbia i permessi necessari.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Microfono non supportato",
        description: "Il tuo browser non supporta il riconoscimento vocale.",
        variant: "destructive",
      });
    }
  }, []);

  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        recognitionRef.current.stop();
        console.log("Stopped listening.");
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
      setIsListening(false);
    }
  }, []);

  return {
    isListening,
    isSupported,
    startListening,
    stopListening
  };
};
