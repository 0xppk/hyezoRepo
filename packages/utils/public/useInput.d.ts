import { ChangeEventHandler, FormEventHandler } from 'react';

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
declare function useInput(initialValue?: string, callback?: (...args: any[]) => any): readonly [string, ChangeEventHandler<HTMLInputElement>, FormEventHandler<HTMLFormElement>];

export { useInput as default };
