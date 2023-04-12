import * as react from 'react';
import { DependencyList } from 'react';

interface ObserverConfig extends IntersectionObserverInit {
    freezeAfterVisible?: boolean;
}
declare function useISO<T extends HTMLElement = HTMLImageElement>(config?: ObserverConfig, deps?: DependencyList): readonly [react.RefObject<T>, boolean, IntersectionObserverEntry | undefined];

export { useISO as default };
