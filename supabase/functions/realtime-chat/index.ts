import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import "https://deno.land/x/xhr@0.1.0/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
};

serve(async (req) => {
  console.log('=== REALTIME CHAT REQUEST ===');
  console.log('Method:', req.method);
  console.log('URL:', req.url);
  console.log('Headers:', Object.fromEntries(req.headers.entries()));

  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    console.log('Returning CORS preflight response');
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    console.log('OPENAI_API_KEY configured:', !!OPENAI_API_KEY);
    
    if (!OPENAI_API_KEY) {
      console.error('OPENAI_API_KEY is not set in Supabase secrets');
      throw new Error('OPENAI_API_KEY is not set');
    }

    // Check if this is a WebSocket upgrade request
    const upgradeHeader = req.headers.get("upgrade");
    console.log('Upgrade header:', upgradeHeader);
    
    if (upgradeHeader === "websocket") {
      console.log('=== WEBSOCKET UPGRADE DETECTED ===');
      
      const { socket, response } = Deno.upgradeWebSocket(req);
      console.log('WebSocket upgrade successful');
      let openaiWs: WebSocket | null = null;

      socket.onopen = async () => {
        console.log('Client WebSocket opened');
        
        try {
          // Connect to OpenAI Realtime API
          const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-12-17";
          console.log('Attempting to connect to OpenAI at:', url);
          openaiWs = new WebSocket(url, [], {
            headers: {
              "Authorization": `Bearer ${OPENAI_API_KEY}`,
              "OpenAI-Beta": "realtime=v1"
            }
          });
          console.log('WebSocket created, waiting for open event');

          openaiWs.onopen = () => {
            console.log('Connected to OpenAI Realtime API successfully');
            socket.send(JSON.stringify({ type: 'connection_success', message: 'Connected to OpenAI' }));
          };

          openaiWs.onmessage = (event) => {
            console.log('Message from OpenAI:', event.data);
            
            try {
              const data = JSON.parse(event.data);
              
              // Send session update after receiving session.created
              if (data.type === 'session.created') {
                console.log('Session created, sending update');
                const sessionUpdate = {
                  type: 'session.update',
                  session: {
                    modalities: ["text", "audio"],
                    instructions: "Sei Vicki, l'assistente virtuale di ATH Advanced Tennis Hub. Sei esperta di tennis e conosci tutto sui programmi, metodologie e tecnologie di ATH. Rispondi sempre in italiano in modo amichevole e professionale. Mantieni le risposte concise ma informative.",
                    voice: "alloy",
                    input_audio_format: "pcm16",
                    output_audio_format: "pcm16",
                    input_audio_transcription: {
                      model: "whisper-1"
                    },
                    turn_detection: {
                      type: "server_vad",
                      threshold: 0.5,
                      prefix_padding_ms: 300,
                      silence_duration_ms: 1000
                    },
                    temperature: 0.8,
                    max_response_output_tokens: "inf"
                  }
                };
                openaiWs?.send(JSON.stringify(sessionUpdate));
              }
              
              // Forward all messages to client
              socket.send(event.data);
            } catch (error) {
              console.error('Error parsing OpenAI message:', error);
            }
          };

          openaiWs.onerror = (error) => {
            console.error('OpenAI WebSocket error:', error);
            console.error('Error details:', JSON.stringify(error, Object.getOwnPropertyNames(error)));
            console.error('WebSocket readyState:', openaiWs?.readyState);
            console.error('WebSocket url:', openaiWs?.url);
            // Don't close client connection immediately for OpenAI errors
            socket.send(JSON.stringify({ type: 'warning', message: 'OpenAI connection issue, retrying...' }));
          };

          openaiWs.onclose = (event) => {
            console.log('OpenAI WebSocket closed:', event.code, event.reason);
            console.log('Close event details:', JSON.stringify({ code: event.code, reason: event.reason, wasClean: event.wasClean }));
            
            // Only close client if it was an abnormal closure
            if (event.code !== 1000) {
              socket.send(JSON.stringify({ type: 'error', message: `OpenAI connection closed unexpectedly: ${event.reason}` }));
            }
          };

        } catch (error) {
          console.error('Error connecting to OpenAI:', error);
          socket.send(JSON.stringify({ type: 'error', message: 'Failed to connect to OpenAI' }));
        }
      };

      socket.onmessage = (event) => {
        console.log('Message from client:', event.data);
        if (openaiWs && openaiWs.readyState === WebSocket.OPEN) {
          openaiWs.send(event.data);
        }
      };

      socket.onclose = (event) => {
        console.log('Client WebSocket closed:', event.code, event.reason);
        console.log('Client close event details:', JSON.stringify({ code: event.code, reason: event.reason, wasClean: event.wasClean }));
        openaiWs?.close();
      };

      socket.onerror = (error) => {
        console.error('Client WebSocket error:', error);
        console.error('Client error details:', JSON.stringify(error));
        // Don't immediately close OpenAI connection for client errors
      };

      return response;
    }

    // If not a WebSocket request, return error
    return new Response(JSON.stringify({ error: 'WebSocket connection required' }), {
      status: 400,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});