/**
 * Executed only when dependency be updated, not on mount.
 * @param {function} callback - Hand over callback that you want to execute.
 * @param {Array} dependencies - Tracker. A delay would be refreshed whenever this elements in Array is updated.
 */
declare function useUpdateEffect(callback: () => void, dependencies: any[]): void;

export { useUpdateEffect as default };
