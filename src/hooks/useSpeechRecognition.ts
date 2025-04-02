
import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface UseSpeechRecognitionProps {
  onResult?: (text: string) => void;
  onError?: (error: string) => void;
}

export const useSpeechRecognition = ({ onResult, onError }: UseSpeechRecognitionProps = {}) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { language } = useLanguage();

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
  const [recognition, setRecognition] = useState<SpeechRecognition | null>(null);

  useEffect(() => {
    // Check if speech recognition is supported
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    
    if (SpeechRecognition) {
      const recognitionInstance = new SpeechRecognition();
      recognitionInstance.continuous = false;
      recognitionInstance.interimResults = false;
      recognitionInstance.lang = getSpeechLanguage(language);

      // Setup event handlers
      recognitionInstance.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (onResult) onResult(transcript);
      };

      recognitionInstance.onerror = (event) => {
        if (onError) onError(event.error);
        setIsListening(false);
      };

      recognitionInstance.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognitionInstance);
      setIsSupported(true);
    } else {
      setIsSupported(false);
      if (onError) onError('Speech recognition not supported');
    }
  }, [getSpeechLanguage, language, onError, onResult]);

  // Update recognition language when app language changes
  useEffect(() => {
    if (recognition) {
      recognition.lang = getSpeechLanguage(language);
    }
  }, [language, recognition, getSpeechLanguage]);

  const startListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.start();
        setIsListening(true);
      } catch (error) {
        console.error('Speech recognition error:', error);
        setIsListening(false);
      }
    }
  }, [recognition]);

  const stopListening = useCallback(() => {
    if (recognition) {
      try {
        recognition.stop();
        setIsListening(false);
      } catch (error) {
        console.error('Error stopping recognition:', error);
      }
    }
  }, [recognition]);

  return {
    isListening,
    isSupported,
    startListening,
    stopListening
  };
};
