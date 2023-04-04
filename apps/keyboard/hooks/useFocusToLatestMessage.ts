import { useState, useEffect, DependencyList, RefObject } from "react";

export default function useFocusToLatestMessage<T extends HTMLElement = HTMLDivElement>(
  ref: RefObject<T>,
  deps: DependencyList,
) {
  
  const scrollToLatest = () => {
    if (!ref.current) return;
    ref.current.scrollTop = ref.current.scrollHeight;
  };

  useEffect(() => {
    scrollToLatest();
  }, deps);
}
