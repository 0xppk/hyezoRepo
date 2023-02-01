'use strict';

var react = require('react');
var useRenderCount = require('./useRenderCount');

function GetRelativeTime(timestamp) {
  const [DAY_MILLISECONDS] = react.useState(() => 1e3 * 60 * 60 * 24);
  const rtf = new Intl.RelativeTimeFormat("kr", {
    numeric: "auto"
  });
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / DAY_MILLISECONDS
  );
  return rtf.format(daysDifference, "second");
}
function useDebugInformation(componentName, props) {
  const count = useRenderCount();
  const changedProps = react.useRef({});
  const previousProps = react.useRef(props);
  const timeSinceLastRender = react.useRef(GetRelativeTime(Date.now()));
  const propKeys = Object.keys({ ...props, ...previousProps });
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key])
      return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] }
    };
  }, {});
  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: timeSinceLastRender.current
  };
  react.useEffect(() => {
    previousProps.current = props;
    timeSinceLastRender.current = GetRelativeTime(Date.now());
    console.log("[debug-info]", componentName, info);
  });
  return info;
}

module.exports = useDebugInformation;
