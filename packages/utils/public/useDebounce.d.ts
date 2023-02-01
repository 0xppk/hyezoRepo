/**
 * Making a value be deferred.
 * @param {function} callback - Hand over callback you want to execute.
 * @param {number} delay - Set a time when does callback to start.
 * @param {Array} dependencies - Tracker. A delay would be refreshed whenever this elements in Array is updated.
 * @example
 *
 */
declare function useDebounce(callback: (...args: any[]) => any, delay: number, dependencies: any[]): void;

export { useDebounce as default };
