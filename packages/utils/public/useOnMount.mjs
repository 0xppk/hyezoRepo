import { useEffect } from 'react';

function useOnMount(callback) {
  useEffect(callback, [callback]);
}

export { useOnMount as default };
