'use strict';

var react = require('react');

function useSize(ref) {
  const [size, setSize] = react.useState({});
  react.useEffect(() => {
    if (ref.current == null)
      return;
    const observer = new ResizeObserver(
      ([entry]) => setSize(entry.contentRect)
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return size;
}

module.exports = useSize;
