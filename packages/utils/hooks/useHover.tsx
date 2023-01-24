import { RefObject, useState } from "react";
import useEventListener from "./useEventListener";

/** 
 * @example
 * const ref = useRef()
 * const hovered = useHover(ref)
 * return (
 * <div ref={ref} style={{backgroundColor: hovered ? "blue" : "red"}} />
 * )
 */
export default function useHover(ref: RefObject<HTMLElement>) {
  const [hovered, setHovered] = useState<boolean>(false);

  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);

  return hovered;
}
