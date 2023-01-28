import { RefObject } from "react";
import useEventListener from "./useEventListener";

/**
 * @example (컴퍼넌트 안에서 사용 예시)
 * const [open, setOpen] = useState(false);
 * const modalRef = useRef<HtmlDivElement>(null)
 *
 * useClickOutside(modalRef, ()=>{
 *   if (open) setOpen(false)
 * })
 *
 * return (
 *   <div ref={modalRef}>
 *     <button onClick={() => { setOpen(false) }}>닫기</button>
 *   </div>
 * )
 */
export default function useClickOutside(
  ref: RefObject<HTMLDivElement>,
  callback: (e: MouseEvent) => void,
) {
  useEventListener(
    "click",
    e => {
      if (ref.current == null || ref.current.contains(e.target)) return;
      callback(e);
    },
    document,
  );
}
