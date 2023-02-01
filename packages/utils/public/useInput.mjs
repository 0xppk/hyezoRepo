import { useState, useMemo, useCallback } from 'react';

function useInput(initialValue = "", callback) {
  const [inputValue, setInputValue] = useState(initialValue);
  const cb = useMemo(() => callback, [callback]);
  const changeHandler = (e) => setInputValue(e.target.value);
  const submitHandler = useCallback(() => {
    setInputValue("");
    if (typeof cb === "undefined")
      return;
    cb();
  }, [cb]);
  return [inputValue, changeHandler, submitHandler];
}

export { useInput as default };
