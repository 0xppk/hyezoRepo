import GridCard from "@hyezo/ui/GridCard";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "UI/GridCard",
  component: GridCard,
  tags: ["autodocs"],
} as Meta<typeof GridCard>;

const Template: StoryFn<typeof GridCard> = args => <GridCard />;

export const Sample = Template.bind({});
Sample.args = {};
