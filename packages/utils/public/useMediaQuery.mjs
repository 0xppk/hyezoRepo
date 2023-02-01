import { useState, useEffect } from 'react';
import useEventListener from './useEventListener';

function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState(
    null
  );
  useEffect(() => {
    const list = globalThis.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener(
    "change",
    (e) => setIsMatch(e.matches),
    mediaQueryList
  );
  return isMatch;
}

export { useMediaQuery as default };
