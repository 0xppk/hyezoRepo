import { useState, useCallback, useEffect } from "react";

/**
 * @param {Function} callback - A promise you gonna execute.
 * @param {Array} dependencies - Dependency array.
 */
export default function useAsync(
  callback: () => Promise<any>,
  dependencies: any[],
) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const callbackMemorized = useCallback(() => {
    setLoading(true);
    setError(undefined);
    setData(undefined);
    callback()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [callback, ...dependencies]);

  useEffect(() => {
    callbackMemorized();
  }, [callbackMemorized]);

  return { error, loading, data };
}
