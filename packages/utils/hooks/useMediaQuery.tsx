import { useState, useEffect } from "react";
import useEventListener from "./useEventListener";

export default function useMediaQuery(mediaQuery: string) {
  const [isMatch, setIsMatch] = useState(false);
  const [mediaQueryList, setMediaQueryList] = useState<MediaQueryList | null>(null);

  useEffect(() => {
    const list = globalThis.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);

  if (mediaQueryList != null)
    useEventListener("change", (e: MediaQueryListEvent) => setIsMatch(e.matches), mediaQueryList);

  return isMatch;
}
