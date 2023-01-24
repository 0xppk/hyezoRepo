import { useEffect, useRef } from "react";

/** 
 * Executed only when dependency be updated, not on mount.
 * @param {function} callback - Hand over callback that you want to execute.
 * @param {Array} dependencies - Tracker. A delay would be refreshed whenever this elements in Array is updated.
 */
export default function useUpdateEffect(callback: () => void, dependencies: []) {
  const firstRenderRef = useRef(true);
  
  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
}
