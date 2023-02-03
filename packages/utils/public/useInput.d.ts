import { ChangeEventHandler } from 'react';

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
declare function useInput<T>(submitAction?: (inputValue: string, ...args: unknown[]) => void, debounceTime?: number): readonly [string, ChangeEventHandler<HTMLInputElement>, () => void];

export { useInput };
