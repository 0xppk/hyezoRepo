'use strict';

var react = require('react');

function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = react.useRef(true);
  react.useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, [callback, ...dependencies]);
}

module.exports = useUpdateEffect;
