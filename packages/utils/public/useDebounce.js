'use strict';

var react = require('react');
var index = require('./index');

function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = index.useTimeout(callback, delay);
  react.useEffect(reset, [...dependencies, reset]);
  react.useEffect(clear, [clear]);
}

module.exports = useDebounce;
