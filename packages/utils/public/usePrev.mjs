import { useRef } from 'react';

function usePrev(state) {
  const currentRef = useRef(state);
  const prevRef = useRef();
  if (currentRef.current !== state) {
    prevRef.current = currentRef.current;
    currentRef.current = state;
  }
  return prevRef.current;
}

export { usePrev as default };
