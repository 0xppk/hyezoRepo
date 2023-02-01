'use strict';

var react = require('react');
var useMediaQuery = require('./useMediaQuery');
var useStorage = require('./useStorage');

function useDarkMode() {
  const [darkMode, setDarkMode] = useStorage.useLocalStorage("useDarkMode", void 0);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;
  react.useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);
  return [enabled, setDarkMode];
}

module.exports = useDarkMode;
