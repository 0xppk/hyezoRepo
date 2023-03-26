import * as react from 'react';
import { SetStateAction } from 'react';

/**
 * @param {string} key - The name.
 * @param defaultValue - The value.
 * @returns {Array} [value, setValue, remove]
 */
declare function useLocalStorage<T>(key: string, defaultValue: T): readonly [T | (() => T) | undefined, react.Dispatch<SetStateAction<T | (() => T) | undefined>>, () => void];
/**
 * @param {string} key - The name
 * @param defaultValue - The value
 * @returns {Array} [value, setValue, remove]
 */
declare function useSessionStorage<T>(key: string, defaultValue: T): readonly [T | (() => T) | undefined, react.Dispatch<SetStateAction<T | (() => T) | undefined>>, () => void];

export { useLocalStorage, useSessionStorage };
