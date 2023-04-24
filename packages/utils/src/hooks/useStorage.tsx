"use client";

import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(key, defaultValue, globalThis.localStorage);
}

export function useSessionStorage<T>(key: string, defaultValue: T) {
  return useStorage<T>(key, defaultValue, globalThis.sessionStorage);
}

export function useStorage<T>(key: string, initialValue: T, storageObject: Storage) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = storageObject.getItem(key);
      return item
        ? JSON.parse(item)
        : initialValue instanceof Function
        ? initialValue()
        : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined" && storedValue !== undefined)
      storageObject.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue, storageObject]);

  const clear = () => {
    storageObject.removeItem(key);
    setStoredValue(initialValue);
  };

  return [storedValue, setStoredValue, clear] as const;
}
