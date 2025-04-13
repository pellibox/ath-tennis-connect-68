
import { useState, useEffect } from 'react';

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

  // Temporary solution with hardcoded API key
  // In production, this should be handled by a server endpoint
  // NEVER expose API keys in client-side code
  const API_KEY = ""; // Leave empty for security - we'll use the public mode for now
  
  // Function to get a signed URL for the conversation
  const getSignedUrl = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      // For security reasons, in a real application, this should be done on a server
      // This is just for demonstration purposes
      
      if (!API_KEY) {
        // If no API key is provided, we'll use the public mode (limited functionality)
        setSignedUrl(null);
        setConversationId(null);
        setIsLoading(false);
        return;
      }
      
      // Only execute this code if an API key is provided
      const response = await fetch(
        `https://api.elevenlabs.io/v1/convai/conversation/get_signed_url?agent_id=${agentId}`,
        {
          method: "GET",
          headers: {
            "xi-api-key": API_KEY,
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
    } catch (err) {
      console.error("Error getting signed URL:", err);
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(() => {
    // Only try to get a signed URL if an API key is provided
    if (API_KEY) {
      getSignedUrl();
    }
  }, [agentId]);
  
  return { signedUrl, conversationId, error, isLoading, getSignedUrl };
};
