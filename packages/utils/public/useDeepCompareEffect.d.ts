/**
 * Keep an Object passed to a dependency by using useRef, so that isn't refreshed whenever each render.
 * @param {Function} callback
 * @param {Array} dependencies
 */
declare function useDeepCompareEffect(callback: () => void, [dependencies]?: any[]): void;

export { useDeepCompareEffect as default };
