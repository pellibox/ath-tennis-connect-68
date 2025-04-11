
import { useState, useEffect } from 'react';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

// Define the response type from ElevenLabs API
interface SignedUrlResponse {
  signed_url: string;
  conversation_id: string;
  error?: string;
}

export const useElevenLabsAuth = (agentId: string) => {
  const [signedUrl, setSignedUrl] = useState<string | null>(null);
  const [conversationId, setConversationId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  
  // Get API key from Supabase secrets
  useEffect(() => {
    const fetchApiKey = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('get-secret', {
          body: { key: 'ELEVENLABS_API_KEY' },
        });
        
        if (error) {
          console.error('Error fetching API key:', error);
          return;
        }
        
        if (data?.value) {
          setApiKey(data.value);
          console.log('ElevenLabs API key loaded successfully');
        }
      } catch (err) {
        console.error('Error in API key fetch:', err);
      }
    };
    
    fetchApiKey();
  }, []);
  
  // Function to get a signed URL for the conversation
  const getSignedUrl = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      if (!apiKey) {
        console.log('No API key available, using public mode');
        setSignedUrl(null);
        setConversationId(null);
        setIsLoading(false);
        return;
      }
      
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
        {
          method: "GET",
          headers: {
            "xi-api-key": apiKey,
            "Content-Type": "application/json"
          }
        }
      );
      
      if (!response.ok) {
        throw new Error(`Failed to get signed URL: ${response.statusText}`);
      }
      
      const data: SignedUrlResponse = await response.json();
      
      if (data.error) {
        throw new Error(data.error);
      }
      
      setSignedUrl(data.signed_url);
      setConversationId(data.conversation_id);
      console.log('Signed URL obtained successfully');
    } catch (err) {
      console.error("Error getting signed URL:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
      toast({
        title: "Error connecting to ElevenLabs",
        description: "Could not initialize voice conversation. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  // Try to get a signed URL once we have the API key
  useEffect(() => {
    if (apiKey) {
      getSignedUrl();
    }
  }, [apiKey, agentId]);
  
  return { signedUrl, conversationId, error, isLoading, getSignedUrl, hasApiKey: !!apiKey };
};
