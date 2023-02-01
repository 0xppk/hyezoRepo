'use strict';

var react = require('react');

function useStateValidation(inspectFunc, initialValue) {
  const [state, setState] = react.useState(initialValue);
  const [isValid, setIsValid] = react.useState(() => inspectFunc(state));
  const onChange = react.useCallback(
    (nextState) => {
      const updatedState = typeof nextState === "function" ? nextState(state) : nextState;
      setState(updatedState);
      setIsValid(inspectFunc(updatedState));
    },
    [inspectFunc, state]
  );
  return [state, onChange, isValid];
}

module.exports = useStateValidation;
