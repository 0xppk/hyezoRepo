import { useState, useEffect, useCallback } from 'react';

function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, globalThis.localStorage);
}
function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, globalThis.sessionStorage);
}
function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null)
      JSON.parse(jsonValue);
    if (typeof defaultValue === "function")
      defaultValue();
    else
      return defaultValue;
  });
  useEffect(() => {
    if (value === void 0)
      storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);
  const remove = useCallback(() => {
    setValue(void 0);
  }, []);
  return [value, setValue, remove];
}

export { useLocalStorage, useSessionStorage, useStorage };
