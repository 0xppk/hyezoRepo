import { useState, useCallback, useEffect } from 'react';

function useAsync(callback, dependencies) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();
  const callbackMemorized = useCallback(() => {
    setLoading(true);
    setError(void 0);
    setData(void 0);
    callback().then(setData).catch(setError).finally(() => setLoading(false));
  }, [callback, ...dependencies]);
  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);
  return { error, loading, data };
}

export { useAsync as default };
