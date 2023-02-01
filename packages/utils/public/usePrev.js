'use strict';

var react = require('react');

function usePrev(state) {
  const currentRef = react.useRef(state);
  const prevRef = react.useRef();
  if (currentRef.current !== state) {
    prevRef.current = currentRef.current;
    currentRef.current = state;
  }
  return prevRef.current;
}

module.exports = usePrev;
