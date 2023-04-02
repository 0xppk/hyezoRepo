import Grid from "@hyezo/ui/Grid";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "UI/Grid",
  component: Grid,
  tags: ["autodocs"],
} as Meta<typeof Grid>;

const Template: StoryFn<typeof Grid> = args => <Grid />;

export const Sample = Template.bind({});
Sample.args = {};
