import { Switch } from "@headlessui/react";
import { Dispatch, ReactNode, SetStateAction } from "react";

type ToggleProps = {
  enabled: boolean;
  setEnabled: Dispatch<SetStateAction<boolean>>;
  children?: ReactNode;
  passive?: boolean;
};

export default function Toggle({ enabled, setEnabled, passive, children }: ToggleProps) {
  return (
    <Switch.Group>
      <Switch.Label passive={passive}>{children}</Switch.Label>
      <Switch
        checked={enabled}
        onChange={setEnabled}
        className="ui-checked:bg-twitter-500 relative inline-flex h-8 w-14 items-center rounded-full bg-gray-300"
      >
        <span className="ui-checked:translate-x-7 ui-not-checked:translate-x-1 inline-block h-6 w-6 rounded-full bg-white duration-300" />
      </Switch>
    </Switch.Group>
  );
}
