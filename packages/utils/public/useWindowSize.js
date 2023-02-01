'use strict';

var react = require('react');
var useEventListener = require('./useEventListener');

function useWindowSize() {
  const [windowSize, setWindowSize] = react.useState({
    width: globalThis.innerWidth,
    height: globalThis.innerHeight
  });
  useEventListener("resize", () => {
    setWindowSize({ width: globalThis.innerWidth, height: globalThis.innerHeight });
  });
  return windowSize;
}

module.exports = useWindowSize;
