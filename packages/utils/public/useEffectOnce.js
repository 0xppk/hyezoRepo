'use strict';

var react = require('react');

function useEffectOnce(callback) {
  react.useEffect(callback, [callback]);
}

module.exports = useEffectOnce;
