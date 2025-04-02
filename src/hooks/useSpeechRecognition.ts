
import { useState, useCallback, useEffect, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/components/ui/use-toast';

interface UseSpeechRecognitionProps {
  onResult?: (text: string) => void;
  onError?: (error: string) => void;
  continuous?: boolean;
  autoRestart?: boolean;
}

export const useSpeechRecognition = ({ 
  onResult, 
  onError, 
  continuous = true,
  autoRestart = true
}: UseSpeechRecognitionProps = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { language } = useLanguage();
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const shouldRestartRef = useRef(false);
  const pausedRef = useRef(false);

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
      recognitionInstance.interimResults = true; // Get interim results for more responsive feedback
      recognitionInstance.lang = getSpeechLanguage(language);

      // Setup event handlers
      recognitionInstance.onstart = () => {
        console.log("Speech recognition started");
        setIsListening(true);
        pausedRef.current = false;
      };

      recognitionInstance.onresult = (event) => {
        const transcript = Array.from(event.results)
          .map(result => result[0].transcript)
          .join(' ');
        
        const isFinal = event.results[event.results.length - 1].isFinal;
        
        if (isFinal) {
          console.log("Final speech recognized:", transcript);
          if (onResult && transcript.trim()) onResult(transcript);
        } else {
          console.log("Interim speech recognized:", transcript);
          // You could add UI feedback for interim results if desired
        }
      };

      recognitionInstance.onerror = (event) => {
        console.error("Speech recognition error:", event.error);
        
        // Don't show errors for aborted recognition
        if (event.error !== 'aborted' && onError) {
          onError(event.error);
        }
        
        // Don't reset listening state if aborted manually
        if (!pausedRef.current) {
          setIsListening(false);
        }
        
        if (event.error === 'no-speech' && !pausedRef.current) {
          toast({
            title: "Nessun audio rilevato",
            description: "Non ho sentito nulla. Prova a parlare più forte o verificare che il microfono funzioni.",
            variant: "destructive",
          });
        }
      };

      recognitionInstance.onend = () => {
        console.log("Speech recognition ended");
        
        // Don't reset listening state if manually paused
        if (!pausedRef.current) {
          setIsListening(false);
        }
        
        // If in continuous mode and still flagged as listening, restart
        if (shouldRestartRef.current && autoRestart && !pausedRef.current) {
          try {
            console.log("Restarting speech recognition");
            setTimeout(() => {
              recognitionInstance.start();
            }, 100);
          } catch (e) {
            console.error("Failed to restart continuous listening:", e);
            setIsListening(false);
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
          shouldRestartRef.current = false;
          recognitionRef.current.abort();
        } catch (e) {
          console.error("Error cleaning up speech recognition:", e);
        }
      }
    };
  }, [getSpeechLanguage, language, onError, onResult, continuous, autoRestart]);

  // Update recognition language when app language changes
  useEffect(() => {
    if (recognitionRef.current) {
      recognitionRef.current.lang = getSpeechLanguage(language);
    }
  }, [language, getSpeechLanguage]);

  const startListening = useCallback(() => {
    if (recognitionRef.current) {
      try {
        // Set flag to indicate we want recognition to restart when it ends
        shouldRestartRef.current = true;
        pausedRef.current = false;
        
        // Cancel any previous instance first
        try {
          recognitionRef.current.abort();
        } catch (e) {
          // Ignore errors during abort
        }
        
        // Start a new recognition session
        setTimeout(() => {
          if (recognitionRef.current) {
            recognitionRef.current.start();
            console.log("Started listening...");
          }
        }, 50);
        
        setIsListening(true);
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
        // Set flag to indicate we don't want recognition to restart
        shouldRestartRef.current = false;
        pausedRef.current = true;
        
        recognitionRef.current.stop();
        console.log("Stopped listening.");
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
    }
  }, []);

  return {
    isListening,
    isSupported,
    startListening,
    stopListening
  };
};
