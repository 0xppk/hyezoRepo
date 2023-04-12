import { DependencyList } from 'react';

interface ObserverConfig extends IntersectionObserverInit {
    freezeAfterVisible?: boolean;
}
declare function useISOLoop<T extends HTMLElement = HTMLImageElement>(config?: ObserverConfig, deps?: DependencyList): readonly [(ref: T) => void, boolean[]];

export { useISOLoop as default };
