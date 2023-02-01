/**
 * @param {function} callback - A function you gonna execute to.
 * @param {number} delay - A timer that trigger callback be executed.
 */
declare function useTimeout(callback: (...args: any[]) => any, delay: number): {
    reset: () => void;
    clear: () => void;
};

export { useTimeout as default };
