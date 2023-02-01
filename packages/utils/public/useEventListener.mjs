import { useCallback, useEffect } from 'react';

function useEventListener(eventType, callback, element = globalThis) {
  const cb = useCallback(callback, [callback]);
  useEffect(() => {
    element.addEventListener(eventType, cb);
    return () => element.removeEventListener(eventType, cb);
  }, [eventType, element, cb]);
}

export { useEventListener as default };
