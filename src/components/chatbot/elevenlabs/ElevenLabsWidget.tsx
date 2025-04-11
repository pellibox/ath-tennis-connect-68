
import React, { useState } from 'react';
import { useElevenLabsAuth } from '@/hooks/useElevenLabsAuth';
import ElevenLabsButton from './ElevenLabsButton';
import { useElevenLabsScript } from './useElevenLabsScript';
import { useWidgetInitialization } from './useWidgetInitialization';

const AGENT_ID = "jJMZr28UE8hDLsO00dmt";

const ElevenLabsWidget = () => {
  const { hasApiKey, apiKeyLoaded, apiKeyError, isDevelopmentMode } = useElevenLabsAuth(AGENT_ID);
  const { scriptLoaded, scriptLoadingFailed, loadScriptDirectly } = useElevenLabsScript();
  const { hiddenWidgetRef, initAttempt, buttonClicked, setButtonClicked, callActive, setCallActive } = useWidgetInitialization({
    scriptLoaded,
    apiKeyLoaded,
    hasApiKey,
    apiKeyError,
    isDevelopmentMode,
    AGENT_ID
  });

  // State for various UI states
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [permissionError, setPermissionError] = useState(false);
  const [manuallyRetriedRef] = useState({ current: 0 });

  return (
    <div className="w-full flex flex-col items-center mt-8">
      <ElevenLabsButton
        scriptLoaded={scriptLoaded}
        scriptLoadingFailed={scriptLoadingFailed}
        apiKeyLoaded={apiKeyLoaded}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        buttonClicked={buttonClicked}
        setButtonClicked={setButtonClicked}
        callActive={callActive}
        setCallActive={setCallActive}
        connectionError={connectionError}
        setConnectionError={setConnectionError}
        permissionError={permissionError}
        setPermissionError={setPermissionError}
        hiddenWidgetRef={hiddenWidgetRef}
        manuallyRetriedRef={manuallyRetriedRef}
        loadScriptDirectly={loadScriptDirectly}
        AGENT_ID={AGENT_ID}
      />
      
      <div 
        ref={hiddenWidgetRef} 
        className="hidden"
        aria-hidden="true"
      >
        {scriptLoaded && (
          <elevenlabs-convai 
            agent-id={AGENT_ID} 
            language={'it'}
          ></elevenlabs-convai>
        )}
      </div>
    </div>
  );
};

export default ElevenLabsWidget;
