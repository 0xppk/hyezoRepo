'use strict';

var isEqual = require('lodash/fp/isEqual');
var react = require('react');

function useDeepCompareEffect(callback, [dependencies] = []) {
  const currentDependenciesRef = react.useRef();
  if (!isEqual(currentDependenciesRef.current, dependencies)) {
    currentDependenciesRef.current = dependencies;
  }
  react.useEffect(callback, [currentDependenciesRef.current, callback]);
}

module.exports = useDeepCompareEffect;
