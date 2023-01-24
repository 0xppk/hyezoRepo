import { useEffect, useRef } from "react";

/** 
 * Check Rendering Count
 * @returns {number} Rendering Count
 */
export default function useRenderCount(): number {
  const count = useRef(1);

  useEffect(() => {
    count.current++;
  });

  return count.current;
}
