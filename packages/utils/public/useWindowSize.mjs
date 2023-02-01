import { useState } from 'react';
import useEventListener from './useEventListener';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight
  });
  useEventListener("resize", () => {
    setWindowSize({ width: globalThis.innerWidth, height: globalThis.innerHeight });
  });
  return windowSize;
}

export { useWindowSize as default };
