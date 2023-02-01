/**
 * Checking a current size of window.
 * @example
 * const { width, height } = useWindowSize()
 * @returns {Object} {width, height}
 */
declare function useWindowSize(): {
    width: number;
    height: number;
};

export { useWindowSize as default };
