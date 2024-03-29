"use client";

import { useEffect, useRef } from "react";
import { useIsoMorphicEffect } from "./index";

/** 
 * @example
 * import { useState } from 'react'

export default function Component() {
  const [visible, setVisible] = useState(true)

  const hide = () => setVisible(false)

  useTimeout(hide, 5000)

  return (
    <div>
      <p>
        {visible
          ? "I'm visible for 5000ms"
          : 'You can no longer see this content'}
      </p>
    </div>
  )
}

 */
function useTimeout(callback: () => void, delay: number | null) {
  const savedCallback = useRef(callback);

  // Remember the latest callback if it changes.
  useIsoMorphicEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the timeout.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return;
    }

    const id = setTimeout(() => savedCallback.current(), delay);

    return () => clearTimeout(id);
  }, [delay]);
}

export default useTimeout;
