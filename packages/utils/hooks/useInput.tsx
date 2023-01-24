import { ChangeEventHandler, FormEventHandler, useCallback, useMemo, useState } from "react";

/**
 * Taking an input words into react state.
 * @param {string} [initialValue=""] - (optional) Default is ""
 * @param {Function} [callback] - (optional) A callback injected into submitHandler.
 * @example
 * const [value, changeHandler] = useInput()
 *
 * return (
 *  <input onChange={changeHandler} value={value} />
 * )
 *
 */
export default function useInput(initialValue: string = "", callback?: (...args: any[]) => any) {
  const [inputValue, setInputValue] = useState(initialValue);
  const cb = useMemo(() => callback, [callback]);

  const changeHandler: ChangeEventHandler<HTMLInputElement> = e => setInputValue(e.target.value);
  const submitHandler: FormEventHandler<HTMLFormElement> = useCallback(() => {
    setInputValue("");
    if (typeof cb === "undefined") return;
    cb();
  }, [cb]);

  return [inputValue, changeHandler, submitHandler] as const;
}
