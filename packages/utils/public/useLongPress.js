'use strict';

var useEffectOnce = require('./useEffectOnce');
var useEventListener = require('./useEventListener');
var useTimeout = require('./useTimeout');

function useLongPress(ref, callback, { delay = 250 }) {
  const { reset, clear } = useTimeout(callback, delay);
  useEffectOnce(clear);
  useEventListener("mousedown", reset, ref.current);
  useEventListener("touchstart", reset, ref.current);
  useEventListener("mouseup", clear, ref.current);
  useEventListener("mouseleave", clear, ref.current);
  useEventListener("touchend", clear, ref.current);
  return;
}

module.exports = useLongPress;
