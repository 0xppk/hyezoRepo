'use strict';

var react = require('react');

function useInput(initialValue = "", callback) {
  const [inputValue, setInputValue] = react.useState(initialValue);
  const cb = react.useMemo(() => callback, [callback]);
  const changeHandler = (e) => setInputValue(e.target.value);
  const submitHandler = react.useCallback(() => {
    setInputValue("");
    if (typeof cb === "undefined")
      return;
    cb();
  }, [cb]);
  return [inputValue, changeHandler, submitHandler];
}

module.exports = useInput;
