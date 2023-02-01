import * as react from 'react';
import { SetStateAction } from 'react';

/**
 * @param {string} key - The name.
 * @param defaultValue - The value.
 * @returns {Array} [value, setValue, remove]
 */
declare function useLocalStorage<T>(key: string, defaultValue: T): readonly [void | T | undefined, react.Dispatch<SetStateAction<void | T | undefined>>, () => void];
/**
 * @param {string} key - The name
 * @param defaultValue - The value
 * @returns {Array} [value, setValue, remove]
 */
declare function useSessionStorage<T>(key: string, defaultValue: T): readonly [void | T | undefined, react.Dispatch<SetStateAction<void | T | undefined>>, () => void];
declare function useStorage<T>(key: string, defaultValue: T, storageObject: Storage): readonly [void | T | undefined, react.Dispatch<SetStateAction<void | T | undefined>>, () => void];

export { useLocalStorage, useSessionStorage, useStorage };
