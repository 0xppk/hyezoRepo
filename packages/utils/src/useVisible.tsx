import { MutableRefObject, useEffect, useState } from "react";

/**
 * @param {MutableRefObject} ref - React.useRef()
 * @param {string} rootMargin - `px` you want to put.
 * @example
 * const headerTwoRef = useRef()
 * const visible = useVisible(headerTwoRerf, "-50px")
 * @returns {boolean} `boolean`
 */
export default function useVisible(
  ref: MutableRefObject<Element>,
  rootMargin: string = "0px",
): boolean {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    console.log(ref.current);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        rootMargin,
      },
    );
    observer.observe(ref.current);

    return () => {
      if (ref.current == null) return;
      observer.unobserve(ref.current);
    };
  }, [rootMargin, ref]);

  return isVisible;
}
