import { MutableRefObject } from 'react';

/**
 * @param {MutableRefObject} ref - React.useRef()
 * @param {string} rootMargin - `px` you want to put.
 * @example
 * const headerTwoRef = useRef()
 * const visible = useVisible(headerTwoRerf, "-50px")
 * @returns {boolean} `boolean`
 */
declare function useVisible(ref: MutableRefObject<Element>, rootMargin?: string): boolean;

export { useVisible as default };
