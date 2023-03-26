import { EffectCallback, DependencyList } from 'react';

declare function useUpdateEffect(effect: EffectCallback, deps?: DependencyList): void;

export { useUpdateEffect as default };
