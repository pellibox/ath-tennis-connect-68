
import { useRef } from 'react';

export const useButtonState = () => {
  const userInitiatedRef = useRef<boolean>(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const buttonFindAttemptsRef = useRef<number>(0);
  
  return {
    userInitiatedRef,
    audioContextRef,
    buttonFindAttemptsRef
  };
};
