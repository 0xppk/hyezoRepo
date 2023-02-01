import { useEffect } from 'react';

function useEffectOnce(callback) {
  useEffect(callback, [callback]);
}

export { useEffectOnce as default };
