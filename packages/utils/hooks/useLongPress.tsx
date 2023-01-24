import { RefObject } from "react";
import useEffectOnce from "./useEffectOnce";
import useEventListener from "./useEventListener";
import useTimeout from "./useTimeout";

/**
 * @example
 * const ref = useRef(null)
 * useLongPress(ref, () => alert("Long Press"))
 *
 * return <div ref={ref} style={{...style}}/>
 */
export default function useLongPress(
  ref: RefObject<HTMLElement>,
  callback: () => void,
  { delay = 250 }: { delay: number },
) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffectOnce(clear);

  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
  return;
}

