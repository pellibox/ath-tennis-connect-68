
import React from 'react';
import { GiArtificialIntelligence } from "react-icons/gi";
import { XCircle, AlertCircle, Loader2, RefreshCw } from "lucide-react";
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';
import { useButtonState } from './useButtonState';
import { useWidgetInteractions } from './useWidgetInteractions';

interface ElevenLabsButtonProps {
  scriptLoaded: boolean;
  scriptLoadingFailed: boolean;
  apiKeyLoaded: boolean;
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
  buttonClicked: boolean;
  setButtonClicked: (value: boolean) => void;
  callActive: boolean;
  setCallActive: (value: boolean) => void;
  connectionError: boolean;
  setConnectionError: (value: boolean) => void;
  permissionError: boolean;
  setPermissionError: (value: boolean) => void;
  hiddenWidgetRef: React.RefObject<HTMLDivElement>;
  manuallyRetriedRef: { current: number };
  loadScriptDirectly: () => void;
  AGENT_ID: string;
}

const ElevenLabsButton: React.FC<ElevenLabsButtonProps> = ({
  scriptLoaded,
  scriptLoadingFailed,
  apiKeyLoaded,
  isLoading,
  setIsLoading,
  buttonClicked,
  setButtonClicked,
  callActive,
  setCallActive,
  connectionError,
  setConnectionError,
  permissionError,
  setPermissionError,
  hiddenWidgetRef,
  manuallyRetriedRef,
  loadScriptDirectly,
  AGENT_ID
}) => {
  // Extract functionality to custom hooks
  const { userInitiatedRef, audioContextRef, buttonFindAttemptsRef } = useButtonState();
  
  const { 
    startElevenLabsCall, 
    stopElevenLabsCall,
    handleManualRetry
  } = useWidgetInteractions({
    scriptLoaded,
    apiKeyLoaded,
    isLoading,
    setIsLoading,
    buttonClicked,
    setButtonClicked,
    callActive,
    setCallActive,
    connectionError,
    setConnectionError,
    permissionError,
    setPermissionError,
    hiddenWidgetRef,
    manuallyRetriedRef,
    loadScriptDirectly,
    userInitiatedRef,
    audioContextRef,
    buttonFindAttemptsRef,
    AGENT_ID
  });

  const renderButtonIcon = () => {
    if (isLoading) {
      return <Loader2 size={buttonClicked ? 80 : 60} className="animate-spin text-white vicki-icon-active" />;
    } else if (connectionError) {
      return <AlertCircle size={buttonClicked ? 80 : 60} className="text-white vicki-icon-active" />;
    } else if (callActive) {
      return (
        <XCircle 
          size={buttonClicked ? 80 : 60}
          className="text-white icon-stop-glow transition-all duration-300 vicki-icon-active animate-pulse-soft"
          strokeWidth={2.5}
        />
      );
    } else {
      return (
        <GiArtificialIntelligence 
          size={buttonClicked ? 80 : 60} 
          className={`${buttonClicked ? '' : 'mr-2'} transition-all duration-300 text-white vicki-icon ${buttonClicked ? 'vicki-icon-active' : ''}`}
        />
      );
    }
  };

  // Show a fallback message if everything fails
  const showFallbackUI = scriptLoadingFailed && manuallyRetriedRef.current >= 2;

  return (
    <>
      <Button 
        onClick={callActive ? stopElevenLabsCall : startElevenLabsCall}
        disabled={isLoading && !scriptLoadingFailed}
        variant="outline"
        className={`
          rounded-full shadow-md px-6 py-3 font-bold text-lg
          ${buttonClicked ? 'max-w-[120px] h-[120px] aspect-square p-0' : 'max-w-[200px] w-full'}
          ${callActive 
            ? 'bg-ath-clay border-ath-clay hover:bg-ath-clay/90 hover:border-ath-clay/90 animate-pulse-soft' 
            : 'bg-transparent border-ath-clay text-white hover:bg-ath-clay hover:text-white'}
          transition-all duration-300 ease-in-out
          ${connectionError ? 'border-red-500 text-red-500 hover:bg-red-500' : ''}
          ${permissionError ? 'border-yellow-500 animate-pulse' : ''}
          ${showFallbackUI ? 'opacity-50 cursor-not-allowed' : ''}
        `}
        aria-label={callActive ? "Stop ElevenLabs call" : "Start ElevenLabs call"}
      >
        <div className={`relative flex items-center justify-center ${callActive ? 'icon-glow' : ''}`}>
          {renderButtonIcon()}
        </div>
        {!buttonClicked && <span className="whitespace-nowrap text-white">Chiedi a Vicki</span>}
      </Button>
      
      {scriptLoadingFailed && !showFallbackUI && (
        <div className="mt-2 flex flex-col items-center">
          <p className="text-xs text-red-400">
            Errore di caricamento.
          </p>
          <button 
            onClick={handleManualRetry} 
            className="elevenlabs-retry-button flex items-center mt-1 text-white text-xs hover:underline"
          >
            <RefreshCw size={12} className="mr-1" /> Riprova
          </button>
        </div>
      )}

      {showFallbackUI && (
        <div className="mt-2 text-center max-w-[250px]">
          <p className="text-xs text-amber-400 mb-2">
            Impossibile caricare il servizio vocale. Prova a:
          </p>
          <ul className="text-xs text-white/80 list-disc text-left pl-4">
            <li>Verificare la connessione internet</li>
            <li>Disattivare blocco script o AdBlock</li>
            <li>Ricaricare la pagina</li>
          </ul>
        </div>
      )}
      
      {isLoading && !buttonClicked && !scriptLoadingFailed && (
        <div className="elevenlabs-loading-indicator flex items-center text-xs text-white/70 mt-2">
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      )}
    </>
  );
};

export default ElevenLabsButton;
