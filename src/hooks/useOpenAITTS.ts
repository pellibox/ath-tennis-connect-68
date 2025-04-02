
import { useState, useCallback, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useOpenAITTS = () => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [audioQueue, setAudioQueue] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const { language } = useLanguage();

  // Map language code to appropriate voice
  const getVoiceForLanguage = useCallback((lang: string) => {
    switch (lang) {
      case 'it': return 'alloy'; // Use an appropriate voice for Italian
      case 'en': return 'nova';  // Use an appropriate voice for English
      case 'fr': return 'alloy'; // Use an appropriate voice for French
      case 'de': return 'alloy'; // Use an appropriate voice for German
      default: return 'alloy';   // Default voice
    }
  }, []);

  // Process audio queue
  useEffect(() => {
    const processQueue = async () => {
      if (audioQueue.length > 0 && !isProcessing) {
        setIsProcessing(true);
        const text = audioQueue[0];
        
        try {
          const audioUrl = await convertTextToSpeech(text);
          if (audioUrl) {
            playAudio(audioUrl);
          }
        } catch (error) {
          console.error('Error converting text to speech:', error);
          // Remove the failed item from queue
          setAudioQueue(current => current.slice(1));
        } finally {
          setIsProcessing(false);
        }
      }
    };

    processQueue();
  }, [audioQueue, isProcessing]);

  // Cleanup audio on unmount
  useEffect(() => {
    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, [audio]);

  // Convert text to speech using a mock implementation for now
  const convertTextToSpeech = async (text: string): Promise<string> => {
    // This is a fallback implementation using browser's speech synthesis
    // In a real implementation, we would call the OpenAI API
    return new Promise((resolve) => {
      const voice = getVoiceForLanguage(language);
      console.log(`Converting text to speech using voice: ${voice}`);
      
      // Simulate API call delay
      setTimeout(() => {
        // Create audio using browser's speech synthesis and return URL
        const utterance = new SpeechSynthesisUtterance(text);
        
        // Set voice if available
        const voices = window.speechSynthesis.getVoices();
        const selectedVoice = voices.find(v => v.lang.includes(language)) || voices[0];
        if (selectedVoice) {
          utterance.voice = selectedVoice;
        }
        
        // Convert to blob URL (simulating a file URL from API)
        const audioBlob = new Blob([JSON.stringify(text)], { type: 'audio/mpeg' });
        const audioUrl = URL.createObjectURL(audioBlob);
        
        // Store the utterance for actual speaking
        (audioUrl as any).utterance = utterance;
        
        resolve(audioUrl);
      }, 300);
    });
  };

  // Play audio from URL
  const playAudio = useCallback((audioUrl: string) => {
    // For our fallback, we'll use the browser's speech synthesis
    if ((audioUrl as any).utterance) {
      const utterance = (audioUrl as any).utterance as SpeechSynthesisUtterance;
      
      utterance.onstart = () => {
        setIsSpeaking(true);
      };
      
      utterance.onend = () => {
        setIsSpeaking(false);
        // Remove from queue when done
        setAudioQueue(current => current.slice(1));
        // Release blob URL
        URL.revokeObjectURL(audioUrl);
      };
      
      utterance.onerror = () => {
        console.error('Speech synthesis error');
        setIsSpeaking(false);
        // Remove from queue on error
        setAudioQueue(current => current.slice(1));
        // Release blob URL
        URL.revokeObjectURL(audioUrl);
      };
      
      window.speechSynthesis.cancel(); // Cancel any ongoing speech
      window.speechSynthesis.speak(utterance);
      return;
    }
    
    // This would be used for actual audio files from OpenAI API
    const newAudio = new Audio(audioUrl);
    setAudio(newAudio);
    
    newAudio.onplay = () => {
      setIsSpeaking(true);
    };
    
    newAudio.onended = () => {
      setIsSpeaking(false);
      // Remove from queue when done
      setAudioQueue(current => current.slice(1));
      // Release blob URL
      URL.revokeObjectURL(audioUrl);
    };
    
    newAudio.onerror = () => {
      console.error('Audio playback error');
      setIsSpeaking(false);
      // Remove from queue on error
      setAudioQueue(current => current.slice(1));
      // Release blob URL
      URL.revokeObjectURL(audioUrl);
    };
    
    newAudio.play().catch(error => {
      console.error('Failed to play audio:', error);
      setIsSpeaking(false);
      // Remove from queue on error
      setAudioQueue(current => current.slice(1));
    });
  }, []);

  // Speak text - add to queue
  const speak = useCallback((text: string) => {
    if (!text) return;
    
    setAudioQueue(current => [...current, text]);
  }, []);

  // Stop speaking
  const stop = useCallback(() => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
    
    // Also stop any speech synthesis
    window.speechSynthesis.cancel();
    
    setIsSpeaking(false);
    setAudioQueue([]);
  }, [audio]);

  return {
    speak,
    stop,
    isSpeaking
  };
};
