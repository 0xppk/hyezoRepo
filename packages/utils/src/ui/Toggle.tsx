import { Switch } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction, useRef } from "react";
import { useEventListener } from "../hooks";
import { cn } from "../utils";

type ToggleProps = {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  passive?: boolean;
};

export default function Toggle({
  enabled,
  setEnabled,
  passive,
  children,
}: ToggleProps) {
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEventListener(
    "pointerdown",
    e => {
      if (!toggleRef.current) return;
      toggleRef.current.dataset.hyezo = "clicked";
    },
    toggleRef,
  );
  useEventListener(
    "pointerup",
    e => {
      if (!toggleRef.current) return;
      toggleRef.current.dataset.hyezo = "";
    },
    toggleRef,
  );

  return (
    <Switch.Group>
      <Switch.Label passive={passive}>{children}</Switch.Label>
      <Switch
        ref={toggleRef}
        checked={enabled}
        onChange={setEnabled}
        className="ui-checked:bg-blue-600 relative inline-flex h-6 w-11 items-center rounded-full bg-gray-200"
      >
        <span className="ui-checked:translate-x-6 ui-not-checked:translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
      </Switch>
    </Switch.Group>
  );
}
