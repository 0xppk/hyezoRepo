'use strict';

var react = require('react');

function useVisible(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = react.useState(false);
  react.useEffect(() => {
    console.log(ref.current);
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      {
        rootMargin
      }
    );
    observer.observe(ref.current);
    return () => {
      if (ref.current == null)
        return;
      observer.unobserve(ref.current);
    };
  }, [rootMargin, ref]);
  return isVisible;
}

module.exports = useVisible;
