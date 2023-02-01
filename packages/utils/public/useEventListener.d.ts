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
declare function useEventListener(eventType: string, callback: (e: any) => void, element?: any): void;

export { useEventListener as default };
