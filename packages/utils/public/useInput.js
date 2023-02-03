'use strict';

var lodash = require('lodash');
var react = require('react');

function useInput(submitAction, debounceTime = 300) {
  const [inputValue, setInputValue] = react.useState("");
  const debounceInput = react.useCallback(
    lodash.debounce((val) => setInputValue(val), debounceTime),
    [debounceTime]
  );
  const changeHandler = (e) => debounceInput(e.target.value);
  const submitHandler = react.useCallback(() => {
    setInputValue("");
    if (typeof submitAction === "undefined")
      return;
    submitAction(inputValue);
  }, [submitAction, inputValue]);
  return [inputValue, changeHandler, submitHandler];
}

exports.useInput = useInput;
