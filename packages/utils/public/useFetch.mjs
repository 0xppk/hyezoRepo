import { useAsync } from './index';

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" }
};
function useFetch(url, dependencies = [], options = {}) {
  return useAsync(async () => {
    const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
    const json = await res.json();
    return json;
  }, dependencies);
}

export { useFetch as default };
