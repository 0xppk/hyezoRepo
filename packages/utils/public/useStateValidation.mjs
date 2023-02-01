import { useState, useCallback } from 'react';

function useStateValidation(inspectFunc, initialValue) {
  const [state, setState] = useState(initialValue);
  const [isValid, setIsValid] = useState(() => inspectFunc(state));
  const onChange = useCallback(
    (nextState) => {
      const updatedState = typeof nextState === "function" ? nextState(state) : nextState;
      setState(updatedState);
      setIsValid(inspectFunc(updatedState));
    },
    [inspectFunc, state]
  );
  return [state, onChange, isValid];
}

export { useStateValidation as default };
