'use strict';

var useEventListener = require('./useEventListener');

function useClickOutside(ref, callback) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target))
        return;
      callback(e);
    },
    document
  );
}

module.exports = useClickOutside;
