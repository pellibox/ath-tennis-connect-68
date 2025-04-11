
interface Window {
  ElevenLabsConvai?: {
    init: (options: { language: string, usePublicAgents: boolean }) => void;
  };
  elevenLabsScriptLoaded?: boolean;
  elevenLabsScriptFailed?: boolean;
  loadElevenLabsScript?: () => void;
  audioStream?: MediaStream;
}
