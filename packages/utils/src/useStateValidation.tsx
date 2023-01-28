import { useCallback, useState } from "react";

/**
 * @param {Function} inspectFunc 검증식
 * @param {*} initialValue 검증대상
 */
export default function useStateValidation(
  inspectFunc: (state: any) => boolean,
  initialValue: any,
) {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => inspectFunc(state));

  const onChange = useCallback(
    (nextState: any) => {
      const updatedState =
        typeof nextState === "function" ? nextState(state) : nextState;
      setState(updatedState);
      setIsValid(inspectFunc(updatedState));
    },
    [inspectFunc, state],
  );

  return [state, onChange, isValid] as const;
}
