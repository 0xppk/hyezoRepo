import { debounce } from 'lodash';
import { useState, useCallback } from 'react';

function useInput(submitAction, debounceTime = 300) {
  const [inputValue, setInputValue] = useState("");
  const debounceInput = useCallback(
    debounce((val) => setInputValue(val), debounceTime),
    [debounceTime]
  );
  const changeHandler = (e) => debounceInput(e.target.value);
  const submitHandler = useCallback(() => {
    setInputValue("");
    if (typeof submitAction === "undefined")
      return;
    submitAction(inputValue);
  }, [submitAction, inputValue]);
  return [inputValue, changeHandler, submitHandler];
}

export { useInput };
