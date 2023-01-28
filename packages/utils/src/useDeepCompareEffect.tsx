import isEqual from "lodash/fp/isEqual";
import { useEffect, useRef } from "react";

/**
 * Keep an Object passed to a dependency by using useRef, so that isn't refreshed whenever each render.
 * @param {Function} callback
 * @param {Array} dependencies
 */
export default function useDeepCompareEffect(
  callback: () => void,
  [dependencies]: any[] = [],
) {
  const currentDependenciesRef = useRef();

  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }

  useEffect(callback, [currentDependenciesRef.current, callback]);
}
