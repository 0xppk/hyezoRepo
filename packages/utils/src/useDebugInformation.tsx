import { useState, useEffect, useRef, useMemo } from "react";
import useRenderCount from "./useRenderCount";

function GetRelativeTime(timestamp: number) {
  const [DAY_MILLISECONDS] = useState(() => 1000 * 60 * 60 * 24);
  const rtf = new Intl.RelativeTimeFormat("kr", {
    numeric: "auto",
  });
  const daysDifference = Math.round(
    (timestamp - new Date().getTime()) / DAY_MILLISECONDS,
  );

  return rtf.format(daysDifference, "second");
}

export default function useDebugInformation(
  componentName: string,
  props: Record<string, any>,
) {
  const count = useRenderCount();
  const changedProps = useRef({});
  const previousProps = useRef(props);
  const timeSinceLastRender = useRef(GetRelativeTime(Date.now()));

  const propKeys = Object.keys({ ...props, ...previousProps });
  changedProps.current = propKeys.reduce((obj, key) => {
    if (props[key] === previousProps.current[key]) return obj;
    return {
      ...obj,
      [key]: { previous: previousProps.current[key], current: props[key] },
    };
  }, {});

  const info = {
    count,
    changedProps: changedProps.current,
    timeSinceLastRender: timeSinceLastRender.current,
  };

  useEffect(() => {
    previousProps.current = props;
    timeSinceLastRender.current = GetRelativeTime(Date.now());
    console.log("[debug-info]🦠🦠🦠", componentName, info);
  });
  return info;
}
