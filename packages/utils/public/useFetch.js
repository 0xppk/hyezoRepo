'use strict';

var index = require('./index');

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" }
};
function useFetch(url, dependencies = [], options = {}) {
  return index.useAsync(async () => {
    const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
    const json = await res.json();
    return json;
  }, dependencies);
}

module.exports = useFetch;
