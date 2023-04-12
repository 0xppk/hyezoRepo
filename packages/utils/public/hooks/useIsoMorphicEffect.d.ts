import { useEffect } from 'react';

/**
 * @example
 * export default function Component() {
  useIsomorphicLayoutEffect(() => {
    console.log(
      "In the browser, I'm an `useLayoutEffect`, but in SSR, I'm an `useEffect`.",
    )
  }, [])

  return <p>Hello, world</p>
}
 */
declare const useIsomorphicEffect: typeof useEffect;

export { useIsomorphicEffect as default };
