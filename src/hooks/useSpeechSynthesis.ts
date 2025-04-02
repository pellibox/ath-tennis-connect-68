
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
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
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
      console.warn("Speech synthesis is not supported in this browser");
    }
  }, []);

  // Select appropriate voice based on current language
  useEffect(() => {
    if (voices.length > 0) {
      const targetLang = getSpeechLanguage(language);
      console.log("Available voices:", voices.map(v => `${v.name} (${v.lang})`).join(", "));
      console.log("Selecting voice for language:", targetLang);
      
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

      console.log("Selected voice:", voice ? voice.name : "None");
      setSelectedVoice(voice);
    }
  }, [voices, language, getSpeechLanguage]);

  const speak = useCallback(
    (text: string) => {
      if (!isSupported || !text) {
        console.warn("Speech synthesis not supported or no text provided");
        return;
      }

      // Cancel any current speech
      window.speechSynthesis.cancel();

      const utterance = new SpeechSynthesisUtterance(text);
      
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.rate = 0.9; // Slightly slower for better clarity
      utterance.pitch = 1.0;
      utterance.lang = getSpeechLanguage(language);
      
      console.log(`Speaking with voice: ${utterance.voice?.name || 'default'}, language: ${utterance.lang}`);

      utterance.onstart = () => {
        console.log("Speech started");
        setIsSpeaking(true);
      };
      
      utterance.onend = () => {
        console.log("Speech ended");
        setIsSpeaking(false);
      };
      
      utterance.onerror = (event) => {
        console.error("Speech error:", event.error);
        setIsSpeaking(false);
      };

      window.speechSynthesis.speak(utterance);
    },
    [isSupported, selectedVoice, language, getSpeechLanguage]
  );

  const stop = useCallback(() => {
    if (isSupported) {
      console.log("Stopping speech");
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
