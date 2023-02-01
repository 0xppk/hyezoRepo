'use strict';

var react = require('react');

function useEventListener(eventType, callback, element = globalThis) {
  const cb = react.useCallback(callback, [callback]);
  react.useEffect(() => {
    element.addEventListener(eventType, cb);
    return () => element.removeEventListener(eventType, cb);
  }, [eventType, element, cb]);
}

module.exports = useEventListener;
