import FlipCard from "@hyezo/ui/FlipCard";
import { StoryFn, Meta } from "@storybook/react";

export default {
  title: "UI/FlipCard",
  component: FlipCard,
  tags: ["autodocs"],
} as Meta<typeof FlipCard>;

const Template: StoryFn<typeof FlipCard> = args => <FlipCard />;

export const Sample = Template.bind({});
Sample.args = {};
