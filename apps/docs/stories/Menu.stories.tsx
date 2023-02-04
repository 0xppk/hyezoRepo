import { StoryFn, Meta } from "@storybook/react";
import { Menu, MenuButton, MenuItems, MenuItem } from "@hyezo/ui/Menu";
import { Button } from "@hyezo/ui/Button";

export default {
  title: "UI/Menu",
  component: Menu,
  tags: ["autodocs"],
} as Meta<typeof Menu>;

const Template: StoryFn<typeof Button> = args => (
  <div style={{ height: "200px" }}>
    <Menu {...args}>
      <MenuButton as={Button}>Menu Button</MenuButton>
      <MenuItems>
        <MenuItem>Item 1</MenuItem>
        <MenuItem>Item 2</MenuItem>
        <MenuItem>Item 3</MenuItem>
      </MenuItems>
    </Menu>
  </div>
);

export const Example = Template.bind({});
