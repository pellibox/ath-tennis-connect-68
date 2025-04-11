
interface Window {
  ElevenLabsConvai?: {
    init: (options: { language: string, usePublicAgents: boolean }) => void;
  };
  elevenLabsScriptLoaded?: boolean;
  elevenLabsScriptFailed?: boolean;
  loadElevenLabsScript?: () => void;
  audioStream?: MediaStream;
}

// Define the custom element for ElevenLabs Convai
declare namespace JSX {
  interface IntrinsicElements {
    'elevenlabs-convai': React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        language?: string;
        class?: string;
        className?: string;
      },
      HTMLElement
    >;
  }
}
