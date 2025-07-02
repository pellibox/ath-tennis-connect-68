import { useState, useEffect, useRef, useCallback } from 'react';
import { AudioRecorder, encodeAudioForAPI, playAudioData, clearAudioQueue } from '@/utils/RealtimeAudio';

interface ChatMessage {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const useRealtimeChat = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const wsRef = useRef<WebSocket | null>(null);
  const audioRecorderRef = useRef<AudioRecorder | null>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const currentTranscriptRef = useRef<string>('');

  const addMessage = useCallback((text: string, isUser: boolean) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      text,
      isUser,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  }, []);

  const connect = useCallback(async () => {
    if (isConnecting || isConnected) {
      console.log('Already connecting or connected');
      return;
    }

    console.log('Starting realtime chat connection...');
    setIsConnecting(true);
    setError(null);

    try {
      // Initialize audio context
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext({ sampleRate: 24000 });
        console.log('Audio context created');
      }

      // Connect to WebSocket through Supabase Edge Function
      const wsUrl = `wss://kcsgaqbmguazebsbwkiz.functions.supabase.co/realtime-chat`;
      console.log('Connecting to WebSocket:', wsUrl);
      
      wsRef.current = new WebSocket(wsUrl);
      
      console.log('WebSocket object created, readyState:', wsRef.current.readyState);

      wsRef.current.onopen = () => {
        console.log('WebSocket connected');
        setIsConnected(true);
        setIsConnecting(false);
        
        // Start audio recording
        startAudioRecording();
      };

      wsRef.current.onmessage = async (event) => {
        try {
          const data = JSON.parse(event.data);
          console.log('Received message:', data.type, data);

          switch (data.type) {
            case 'session.created':
              console.log('Session created successfully');
              break;

            case 'session.updated':
              console.log('Session updated:', data.session);
              break;

            case 'input_audio_buffer.speech_started':
              console.log('Speech started');
              setIsListening(true);
              break;

            case 'input_audio_buffer.speech_stopped':
              console.log('Speech stopped');
              setIsListening(false);
              break;

            case 'response.audio.delta':
              if (data.delta && audioContextRef.current) {
                console.log('Received audio delta');
                const binaryString = atob(data.delta);
                const bytes = new Uint8Array(binaryString.length);
                for (let i = 0; i < binaryString.length; i++) {
                  bytes[i] = binaryString.charCodeAt(i);
                }
                await playAudioData(audioContextRef.current, bytes);
                setIsSpeaking(true);
              }
              break;

            case 'response.audio.done':
              console.log('Audio response completed');
              setIsSpeaking(false);
              break;

            case 'response.audio_transcript.delta':
              if (data.delta) {
                currentTranscriptRef.current += data.delta;
                console.log('Transcript delta:', data.delta);
              }
              break;

            case 'response.audio_transcript.done':
              if (currentTranscriptRef.current) {
                console.log('Complete transcript:', currentTranscriptRef.current);
                addMessage(currentTranscriptRef.current, false);
                currentTranscriptRef.current = '';
              }
              break;

            case 'conversation.item.input_audio_transcription.completed':
              if (data.transcript) {
                console.log('User transcript:', data.transcript);
                addMessage(data.transcript, true);
              }
              break;

            case 'error':
              console.error('WebSocket error:', data.message);
              setError(data.message);
              break;
              
            case 'warning':
              console.warn('WebSocket warning:', data.message);
              // Don't set error for warnings, just log
              break;

            default:
              console.log('Unhandled message type:', data.type);
          }
        } catch (error) {
          console.error('Error parsing WebSocket message:', error);
        }
      };

      wsRef.current.onerror = (error) => {
        console.error('WebSocket error event:', error);
        console.error('WebSocket readyState at error:', wsRef.current?.readyState);
        console.error('WebSocket URL was:', wsUrl);
        setError('Connection error - check if OPENAI_API_KEY is set in Supabase secrets');
        setIsConnecting(false);
      };

      wsRef.current.onclose = (event) => {
        console.log('WebSocket closed:', event.code, event.reason);
        console.log('Close event details:', JSON.stringify({ code: event.code, reason: event.reason, wasClean: event.wasClean }));
        setIsConnected(false);
        setIsConnecting(false);
        setIsSpeaking(false);
        setIsListening(false);
        cleanup();
        
        // Auto-reconnect if not a normal closure
        if (event.code !== 1000 && event.code !== 1001) {
          console.log('Attempting to reconnect in 2 seconds...');
          setTimeout(() => {
            if (!isConnected && !isConnecting) {
              console.log('Auto-reconnecting...');
              connect();
            }
          }, 2000);
        }
      };

    } catch (error) {
      console.error('Error connecting:', error);
      setError(error instanceof Error ? error.message : 'Connection failed');
      setIsConnecting(false);
    }
  }, [isConnecting, isConnected, addMessage]);

  const startAudioRecording = async () => {
    try {
      console.log('Starting audio recording...');
      
      audioRecorderRef.current = new AudioRecorder((audioData: Float32Array) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
          const encodedAudio = encodeAudioForAPI(audioData);
          const message = {
            type: 'input_audio_buffer.append',
            audio: encodedAudio
          };
          wsRef.current.send(JSON.stringify(message));
        }
      });

      await audioRecorderRef.current.start();
      console.log('Audio recording started');
    } catch (error) {
      console.error('Error starting audio recording:', error);
      setError('Microphone access denied');
    }
  };

  const disconnect = useCallback(() => {
    console.log('Disconnecting realtime chat...');
    cleanup();
    wsRef.current?.close();
    wsRef.current = null;
  }, []);

  const cleanup = () => {
    console.log('Cleaning up resources...');
    
    audioRecorderRef.current?.stop();
    audioRecorderRef.current = null;
    
    clearAudioQueue();
    
    audioContextRef.current?.close();
    audioContextRef.current = null;
    
    setIsConnected(false);
    setIsConnecting(false);
    setIsSpeaking(false);
    setIsListening(false);
  };

  useEffect(() => {
    return () => {
      disconnect();
    };
  }, [disconnect]);

  return {
    isConnected,
    isConnecting,
    isSpeaking,
    isListening,
    messages,
    error,
    connect,
    disconnect
  };
};