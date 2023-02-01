'use strict';

var react = require('react');
var useEventListener = require('./useEventListener');

function useOnlineStatus() {
  const [online, setOnline] = react.useState(navigator.onLine);
  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));
  return online;
}

module.exports = useOnlineStatus;
