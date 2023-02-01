'use strict';

var react = require('react');
var useEventListener = require('./useEventListener');

function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = react.useState(false);
  const [mediaQueryList, setMediaQueryList] = react.useState(
    null
  );
  react.useEffect(() => {
    const list = globalThis.matchMedia(mediaQuery);
    setMediaQueryList(list);
    setIsMatch(list.matches);
  }, [mediaQuery]);
  useEventListener(
    "change",
    (e) => setIsMatch(e.matches),
    mediaQueryList
  );
  return isMatch;
}

module.exports = useMediaQuery;
