'use strict';

var react = require('react');
var useEventListener = require('./useEventListener');

function useHover(ref) {
  const [hovered, setHovered] = react.useState(false);
  useEventListener("mouseover", () => setHovered(true), ref.current);
  useEventListener("mouseout", () => setHovered(false), ref.current);
  return hovered;
}

module.exports = useHover;
