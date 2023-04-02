import { RefObject } from 'react';

type Handler = (event: MouseEvent) => void;
/**
 * @example
 * import { useRef } from 'react'

export default function Component() {
  const ref = useRef(null)

  const handleClickOutside = () => {
    // Your custom logic here
    console.log('clicked outside')
  }

  const handleClickInside = () => {
    // Your custom logic here
    console.log('clicked inside')
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <button
      ref={ref}
      onClick={handleClickInside}
      style={{ width: 200, height: 200, background: 'cyan' }}
    />
  )
}

 */
declare function useOnClickOutside<T extends HTMLElement = HTMLElement>(ref: RefObject<T>, handler: Handler, mouseEvent?: "mousedown" | "mouseup"): void;

export { useOnClickOutside as default };
