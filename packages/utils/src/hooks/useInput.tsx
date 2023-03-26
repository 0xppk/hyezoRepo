"use client";

import { debounce } from "lodash";
import { ChangeEventHandler, useCallback, useState } from "react";

// type SubmitEventHandler =
//   |
//   | FormEventHandler<HTMLFormElement>;

/**
 * Taking an input words into react state.
 * @param {Function} [callback] - (optional) A callback that is injected into the submitHandler.
 * @param {number} [debounceTime] - (default) The input state is updated after this input time has passed.
 * @example
 * const [value, changeHandler, submitHandler] = useInput()
 *
 * return (
 *   <>
 *     <input onChange={changeHandler} value={value} />
 *     <button type="submit" onClick={submitHandler}
 *   </>
 * )
 */
export default function useInput(
  submitAction?: (inputValue: string, ...args: unknown[]) => void,
  debounceTime: number = 300,
) {
  const [inputValue, setInputValue] = useState("");
  const debounceInput = useCallback(
    debounce((val: string) => setInputValue(val), debounceTime),
    [debounceTime],
  );

  const changeHandler: ChangeEventHandler<HTMLInputElement> = e =>
    debounceInput(e.target.value);

  const submitHandler: () => void | Promise<any> = useCallback(() => {
    setInputValue("");
    if (typeof submitAction === "undefined") return;

    submitAction(inputValue);
  }, [submitAction, inputValue]);

  const reset = () => setInputValue("");

  return [inputValue, changeHandler, submitHandler, reset] as const;
}
