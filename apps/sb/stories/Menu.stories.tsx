import { Button } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";
import { Menu, MenuItem } from "@hyezo/ui";

export default {
  title: "UI/Menu",
  component: Menu,
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Button> = args => (
  <Menu {...args}>
    <MenuItem>Item 1</MenuItem>
    <MenuItem>Item 2</MenuItem>
    <MenuItem>Item 3</MenuItem>
  </Menu>
);

export const Example = Template.bind({});
