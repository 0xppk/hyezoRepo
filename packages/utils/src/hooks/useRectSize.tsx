"use client";

import { RefObject, useState } from "react";
import useEffectOnce from "./useEffectOnce";

export default function useRectSize(ref: RefObject<HTMLElement>) {
  const [size, setSize] = useState({});

  useEffectOnce(() => {
    if (ref?.current == null) return;
    const observer = new ResizeObserver(([entry]: ResizeObserverEntry[]) =>
      setSize(entry.contentRect),
    );
    observer.observe(ref.current);

    return () => observer.disconnect();
  });

  return size;
}
