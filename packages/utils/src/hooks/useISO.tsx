"use client";

import { DependencyList, useEffect, useRef, useState } from "react";

interface ObserverConfig extends IntersectionObserverInit {
  freezeAfterVisible?: boolean;
}

export default function useISO<T extends HTMLElement = HTMLImageElement>(
  config: ObserverConfig = {},
  deps: DependencyList = [],
) {
  const elementRef = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry>();

  const defaultConfig: ObserverConfig = {
    threshold: config.threshold || 0,
    root: config.root || null,
    rootMargin: config.rootMargin || "0%",
    freezeAfterVisible: config.freezeAfterVisible || false,
  };

  const { freezeAfterVisible, root, rootMargin, threshold } = defaultConfig;

  const frozen = isVisible && freezeAfterVisible;

  const updateEntry = (entries: IntersectionObserverEntry[]): void => {
    const [entry] = entries;
    setEntry(entry);
    setIsVisible(entry.isIntersecting);
  };

  useEffect(() => {
    const node = elementRef?.current;
    const hasIOSupport = !!globalThis.IntersectionObserver;

    if (!hasIOSupport || frozen || !node) return;

    const observerConfig = { threshold, root, rootMargin };
    const observer = new IntersectionObserver(updateEntry, observerConfig);

    observer.observe(node);

    return () => observer.disconnect();
  }, [elementRef, threshold, root, rootMargin, frozen, ...deps]);

  return [elementRef, isVisible, entry] as const;
}
