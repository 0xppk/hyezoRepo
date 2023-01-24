import { useCallback, useEffect } from "react";

/** 
 * @param {string} eventType An event action.
 * @param {Function} callback that you want to execute.
 * @param {typeof globalThis} [element=globalThis] An element where the event takes place.
 * @example
 * useEventListener("scroll", useMemo(
    () =>
      throttle(() => {
        const currentScrollY = globalThis.scrollY;
        if (currentScrollY > beforeScrollY.current && currentScrollY > 60) setNavShow(true);
        else setNavShow(false);
        beforeScrollY.current = currentScrollY;
      }, 300),
    [beforeScrollY],
  )
 */
export default function useEventListener(
  eventType: string,
  callback: (e: any) => void,
  element: any = globalThis,
) {
  const cb = useCallback(callback, [callback]);

  useEffect(() => {
    // const handler = (e: Event) => cb(e);
    element.addEventListener(eventType, cb);
    return () => element.removeEventListener(eventType, cb);
  }, [eventType, element]);
}
