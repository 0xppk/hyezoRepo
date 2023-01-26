import { useEffect } from "react";
import { useTimeout } from "./index";

/**
 * Making a value be deferred.
 * @param {function} callback - Hand over callback you want to execute.
 * @param {number} delay - Set a time when does callback to start.
 * @param {Array} dependencies - Tracker. A delay would be refreshed whenever this elements in Array is updated.
 * @example
 *
 */
export default function useDebounce(
  callback: (...args: any[]) => any,
  delay: number,
  dependencies: any[],
) {
  const { reset, clear } = useTimeout(callback, delay);

  useEffect(reset, [...dependencies, reset]);
  // 걸자마자 시작되면 안 되므로 최초 마운트시엔 클리어
  useEffect(clear, [clear]);
}
