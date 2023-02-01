'use strict';

var react = require('react');

function useOnMount(callback) {
  react.useEffect(callback, [callback]);
}

module.exports = useOnMount;
