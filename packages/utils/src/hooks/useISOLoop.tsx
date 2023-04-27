"use client";

import { useState, useEffect, useRef, DependencyList, useCallback } from "react";

interface ObserverConfig extends IntersectionObserverInit {
  freezeAfterVisible?: boolean;
}

export default function useISOLoop<T extends HTMLElement = HTMLDivElement>(
  config: ObserverConfig = {},
  deps: DependencyList = [],
) {
  // const isoRef = useRef<T[]>([]);
  const [isoList, setIsoList] = useState<T[]>([]);
  const [isVisible, setIsVisible] = useState<boolean[]>([]);
  const handleRef = useCallback(
    (thisRef: T) => {
      if (thisRef && !isoList.includes(thisRef)) {
        isoList.push(thisRef);
        setIsVisible(prev => [...prev, false]);
      }
    },
    [isoList],
  );

  const defaultConfig: ObserverConfig = {
    threshold: config.threshold || 0,
    root: config.root || null,
    rootMargin: config.rootMargin || "0%",
    freezeAfterVisible: config.freezeAfterVisible || false,
  };

  const { freezeAfterVisible, root, rootMargin, threshold } = defaultConfig;
  const frozen = isVisible.every(visibility => visibility === true);

  const updateEntry: IntersectionObserverCallback = useCallback(
    entries => {
      entries.forEach(entry => {
        const i = isoList.findIndex(ref => ref === entry.target);
        if (i !== -1) {
          setIsVisible(prev => {
            const temp = [...prev];
            temp[i] = (freezeAfterVisible && temp[i]) || entry.isIntersecting;
            return temp;
          });
        }
      });
    },
    [freezeAfterVisible, isoList],
  );

  useEffect(() => {
    const node = isoList;
    const hasIOSupport = !!globalThis.IntersectionObserver;

    if (!hasIOSupport || !node[0] || frozen) return;

    const observerConfig = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerConfig);

    node.forEach(ref => observer.observe(ref));
    return () => observer.disconnect();
  }, [isoList, threshold, root, rootMargin, frozen]);

  useEffect(() => {
    setIsoList([]);
    setIsVisible([]);
  }, deps);

  return [handleRef, isVisible] as const;
}
