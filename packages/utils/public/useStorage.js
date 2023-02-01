'use strict';

var react = require('react');

function useLocalStorage(key, defaultValue) {
  return useStorage(key, defaultValue, globalThis.localStorage);
}
function useSessionStorage(key, defaultValue) {
  return useStorage(key, defaultValue, globalThis.sessionStorage);
}
function useStorage(key, defaultValue, storageObject) {
  const [value, setValue] = react.useState(() => {
    const jsonValue = storageObject.getItem(key);
    if (jsonValue != null)
      JSON.parse(jsonValue);
    if (typeof defaultValue === "function")
      defaultValue();
    else
      return defaultValue;
  });
  react.useEffect(() => {
    if (value === void 0)
      storageObject.removeItem(key);
    storageObject.setItem(key, JSON.stringify(value));
  }, [key, value, storageObject]);
  const remove = react.useCallback(() => {
    setValue(void 0);
  }, []);
  return [value, setValue, remove];
}

exports.useLocalStorage = useLocalStorage;
exports.useSessionStorage = useSessionStorage;
exports.useStorage = useStorage;
