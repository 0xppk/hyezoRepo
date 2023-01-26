import { useCallback, useRef, useState } from "react";

export default function useHistory(defaultValue: any, { capacity = 10 } = {}) {
  const [value, setValue] = useState(defaultValue);
  const historyRef = useRef([value]);
  const cursorRef = useRef(0);

  const set = useCallback(
    (v: typeof defaultValue) => {
      const resolvedValue = typeof v === "function" ? v(value) : v;
      if (historyRef.current[cursorRef.current] !== resolvedValue) {
        if (cursorRef.current < historyRef.current.length - 1) {
          historyRef.current.splice(cursorRef.current + 1);
        }
        historyRef.current.push(resolvedValue);

        while (historyRef.current.length > capacity) {
          historyRef.current.shift();
        }
        cursorRef.current = historyRef.current.length - 1;
      }
      setValue(resolvedValue);
    },
    [capacity, value],
  );

  const back = useCallback(() => {
    if (cursorRef.current <= 0) return;
    cursorRef.current--;
    setValue(historyRef.current[cursorRef.current]);
  }, []);

  const forward = useCallback(() => {
    if (cursorRef.current >= historyRef.current.length - 1) return;
    cursorRef.current++;
    setValue(historyRef.current[cursorRef.current]);
  }, []);

  const go = useCallback((index: number) => {
    if (index < 0 || index >= historyRef.current.length - 1) return;
    cursorRef.current = index;
    setValue(historyRef.current[cursorRef.current]);
  }, []);

  return [
    value,
    set,
    {
      history: historyRef.current,
      cursor: cursorRef.current,
      back,
      go,
      forward,
    },
  ] as const;
}
