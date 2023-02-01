'use strict';

var react = require('react');

function useRenderCount() {
  const count = react.useRef(1);
  react.useEffect(() => {
    count.current++;
  });
  return count.current;
}

module.exports = useRenderCount;
