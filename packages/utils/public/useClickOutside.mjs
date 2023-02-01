import useEventListener from './useEventListener';

function useClickOutside(ref, callback) {
  useEventListener(
    "click",
    (e) => {
      if (ref.current == null || ref.current.contains(e.target))
        return;
      callback(e);
    },
    document
  );
}

export { useClickOutside as default };
