'use strict';

var Cookies = require('js-cookie');
var react = require('react');

function useCookie(name, defaultValue) {
  const [value, setValue] = react.useState(() => {
    const cookie = Cookies.get(name);
    if (cookie)
      return cookie;
    Cookies.set(name, defaultValue);
    return defaultValue;
  });
  const updateCookie = react.useCallback(
    (newValue, options) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name]
  );
  const deleteCookie = react.useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);
  return [value, updateCookie, deleteCookie];
}

module.exports = useCookie;
