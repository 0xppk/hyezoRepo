import { StoryFn, Meta } from "@storybook/react";
import { Button } from "@ui/Button";

export default {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    fullWidth: {
      type: "boolean",
    },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => (
  <Button {...args}>으잉</Button>
);

export const Primary = Template.bind({});
Primary.args = {
  intent: "primary",
};
