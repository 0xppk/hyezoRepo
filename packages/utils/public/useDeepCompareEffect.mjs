import isEqual from 'lodash/fp/isEqual';
import { useRef, useEffect } from 'react';

function useDeepCompareEffect(callback, [dependencies] = []) {
  const currentDependenciesRef = useRef();
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }
  useEffect(callback, [currentDependenciesRef.current, callback]);
}

export { useDeepCompareEffect as default };
