import { useState } from "react";
import useEventListener from "./useEventListener";

/**
 * Checking a current size of window.
 * @example
 * const { width, height } = useWindowSize()
 * @returns {Object} {width, height}
 */
export default function useWindowSize(): { width: number; height: number } {
  const [windowSize, setWindowSize] = useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({ width: globalThis.innerWidth, height: globalThis.innerHeight });
  });

  return windowSize;
}
