
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
      'agent-id': string;
      'language'?: string;
      'url'?: string;
      'class'?: string;
      'className'?: string;
    }, HTMLElement>;
  }
}

// Define the global ElevenLabs object
interface ElevenLabsConvaiType {
  init: (options: {
    language?: string;
    usePublicAgents?: boolean;
  }) => void;
  destroy?: () => void;
  reinitialize?: () => void;
  reset?: () => void;
}

interface Window {
  ElevenLabsConvai?: ElevenLabsConvaiType;
  elevenLabsScriptLoaded?: boolean;
  elevenLabsScriptFailed?: boolean;
  loadElevenLabsScript?: () => void;
  audioStream?: MediaStream; // Store audio stream reference
}
