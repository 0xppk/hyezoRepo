import Toggle from "@hyezo/ui/Toggle";
import { StoryFn, Meta } from "@storybook/react";
import { useState } from "react";

export default {
  title: "UI/Toggle",
  component: Toggle,
  tags: ["autodocs"],
} as Meta<typeof Toggle>;

const Template: StoryFn<typeof Toggle> = args => {
  const [enabled, setEnabled] = useState(false);

  return (
    <div className="flex items-center justify-center">
      <Toggle enabled={enabled} setEnabled={setEnabled}>
        uhhui
      </Toggle>
    </div>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
