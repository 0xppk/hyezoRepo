import { RefObject } from 'react';

/**
 * @example
 * const ref = useRef(null)
 * useLongPress(ref, () => alert("Long Press"))
 *
 * return <div ref={ref} style={{...style}}/>
 */
declare function useLongPress(ref: RefObject<HTMLElement>, callback: () => void, { delay }: {
    delay: number;
}): void;

export { useLongPress as default };
