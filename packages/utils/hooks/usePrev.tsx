import { useRef } from "react";

export default function usePrev(state: any) {
  const currentRef = useRef(state);
  const prevRef = useRef();

  if (currentRef.current !== state) {
    prevRef.current = currentRef.current;
    currentRef.current = state;
  }

  return prevRef.current;
}
