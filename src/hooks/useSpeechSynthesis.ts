
import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useSpeechSynthesis = () => {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [selectedVoice, setSelectedVoice] = useState<SpeechSynthesisVoice | null>(null);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const { language } = useLanguage();

  // Map language code to speech synthesis language
  const getSpeechLanguage = useCallback((lang: string) => {
    switch (lang) {
      case 'it': return 'it-IT';
      case 'en': return 'en-US';
      case 'fr': return 'fr-FR';
      case 'de': return 'de-DE';
      default: return 'it-IT'; // Default to Italian
    }
  }, []);

  // Load available voices
  useEffect(() => {
    if ('speechSynthesis' in window) {
      setIsSupported(true);
      
      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
      };

      loadVoices();
      
      // Chrome loads voices asynchronously
      if (window.speechSynthesis.onvoiceschanged !== undefined) {
        window.speechSynthesis.onvoiceschanged = loadVoices;
      }
    } else {
      setIsSupported(false);
    }
  }, []);

  // Select appropriate voice based on current language
  useEffect(() => {
    if (voices.length > 0) {
      const targetLang = getSpeechLanguage(language);
      
      // Try to find a female voice for the language (generally sounds better)
      let voice = voices.find(voice => 
        voice.lang.includes(targetLang) && 
        voice.name.toLowerCase().includes('female')
      );
      
      // If no female voice, get any voice for the language
      if (!voice) {
        voice = voices.find(voice => voice.lang.includes(targetLang));
      }
      
      // If still no voice, use the first available
      if (!voice) {
        voice = voices[0];
      }

      setSelectedVoice(voice);
    }
  }, [voices, language, getSpeechLanguage]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported || !text) return;

      // Cancel any current speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.rate = 1.0;
      utterance.pitch = 1.0;
      utterance.lang = getSpeechLanguage(language);

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isSupported, selectedVoice, language, getSpeechLanguage]
  );

  const stop = useCallback(() => {
    if (isSupported) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, [isSupported]);

  return {
    speak,
    stop,
    isSpeaking,
    isSupported,
    voices,
    selectedVoice
  };
};
