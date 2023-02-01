'use strict';

var react = require('react');

function useTimeout(callback, delay) {
  const callbackRef = react.useRef(callback);
  const timeoutRef = react.useRef();
  react.useEffect(() => {
    if (callbackRef.current)
      callbackRef.current = callback;
  }, [callback]);
  const set = react.useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay);
  }, [delay]);
  const clear = react.useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current);
  }, []);
  react.useEffect(() => {
    set();
    return clear;
  }, [delay, set, clear]);
  const reset = react.useCallback(() => {
    clear();
    set();
  }, [clear, set]);
  return { reset, clear };
}

module.exports = useTimeout;
