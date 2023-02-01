import { RefObject } from 'react';

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
declare function useClickOutside(ref: RefObject<HTMLDivElement>, callback: (e: MouseEvent) => void): void;

export { useClickOutside as default };
