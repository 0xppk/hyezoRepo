import { useEffect } from 'react';
import { useTimeout } from './index';

function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffect(reset, [...dependencies, reset]);
  useEffect(clear, [clear]);
}

export { useDebounce as default };
