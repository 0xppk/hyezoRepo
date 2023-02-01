import { useState, useEffect } from 'react';

function useVisible(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
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

export { useVisible as default };
