import { RefObject } from 'react';

/**
 * @example
 * const ref = useRef()
 * const hovered = useHover(ref)
 * return (
 * <div ref={ref} style={{backgroundColor: hovered ? "blue" : "red"}} />
 * )
 */
declare function useHover(ref: RefObject<HTMLElement>): boolean;

export { useHover as default };
