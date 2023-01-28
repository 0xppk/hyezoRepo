import { StoryFn, Meta } from "@storybook/react";
import { Text, type TextProps } from "@ui/Text";

export default {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = (args) => <Text {...args}></Text>;

export const Sample = Template.bind({});
Sample.args = {
  children: "아래 카탈로그를 참고해주세요",
  variant: "medium/semibold",
  color: "#37bbe1",
};

interface StoryProps {
  variants: TextProps["variant"][];
}

const Proto = ({ variants }: StoryProps) => ({
  render: () => (
    <div>
      {variants.map((variant) => (
        <Text key={variant} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
});

export const Small = Proto({
  variants: ["small/light", "small/normal", "small/semibold", "small/bold"],
});

export const Medium = Proto({
  variants: ["medium/light", "medium/normal", "medium/semibold", "medium/bold"],
});

export const Large = Proto({
  variants: ["large/light", "large/normal", "large/semibold", "large/bold"],
});
