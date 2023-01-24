import { useEffect, useCallback, useState, SetStateAction } from "react";

/**
 * @param {string} key - The name.
 * @param defaultValue - The value.
 * @returns {Array} [value, setValue, remove]
 */
export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(key, defaultValue, globalThis.localStorage);
}

/**
 * @param {string} key - The name
 * @param defaultValue - The value
 * @returns {Array} [value, setValue, remove]
 */
export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(key, defaultValue, globalThis.sessionStorage);
}

export function useStorage<T>(
  key: string,
  defaultValue: T,
  storageObject: Storage,
) {
  const [value, setValue] = useState<T | void | undefined>(() => {
    // 스토리지에 이미 있으면
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null) JSON.parse(jsonValue);
    // 스토리지에 없으면
    if (typeof defaultValue === "function") defaultValue();
    else return defaultValue;
  });

  useEffect(() => {
    if (value === undefined) storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove] as const;
}
