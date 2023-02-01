'use strict';

var react = require('react');

function useAsync(callback, dependencies) {
  const [loading, setLoading] = react.useState(true);
  const [error, setError] = react.useState();
  const [data, setData] = react.useState();
  const callbackMemorized = react.useCallback(() => {
    setLoading(true);
    setError(void 0);
    setData(void 0);
    callback().then(setData).catch(setError).finally(() => setLoading(false));
  }, [callback, ...dependencies]);
  react.useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);
  return { error, loading, data };
}

module.exports = useAsync;
