import { debounce } from "lodash";
import {
  ChangeEventHandler,
  FormEventHandler,
  MouseEventHandler,
  useCallback,
  useMemo,
  useState,
} from "react";

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
export function useInput(
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
  // FormEventHandler<HTMLFormElement>
  const submitHandler: () => void = useCallback(() => {
    setInputValue("");
    if (typeof submitAction === "undefined") return;
    submitAction(inputValue);
  }, [submitAction, inputValue]);

  return [inputValue, changeHandler, submitHandler] as const;
}
