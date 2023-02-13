import { StoryFn, Meta } from "@storybook/react";
import { Text, type TextProps } from "@hyezo/ui";

export default {
  title: "UI/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      description: "A combinations of size and weight.",
      table: {
        defaultValue: {
          summary: `"sm/normal"`,
        },
      },
    },
    children: {
      description: "`ReactNode`",
    },
  },
} as Meta<typeof Text>;

const Template: StoryFn<typeof Text> = args => <Text {...args}></Text>;

export const Sample = Template.bind({});
Sample.args = {
  children: "반응형 폰트 사이즈",
  variant: "sm/semibold",
  color: "#37bbe1",
};

interface StoryProps {
  variants: TextProps["variant"][];
}

const Proto = ({ variants }: StoryProps) => ({
  render: () => (
    <div>
      {variants.map(variant => (
        <Text key={variant} variant={variant}>
          {variant}
        </Text>
      ))}
    </div>
  ),
});

export const Small = Proto({
  variants: ["sm/light", "sm/normal", "sm/semibold", "sm/bold"],
});

export const Medium = Proto({
  variants: ["md/light", "md/normal", "md/semibold", "md/bold"],
});

export const Large = Proto({
  variants: ["lg/light", "lg/normal", "lg/semibold", "lg/bold"],
});

export const Xlarge = Proto({
  variants: ["xl/light", "xl/normal", "xl/semibold", "xl/bold"],
});

export const Xxlarge = Proto({
  variants: ["2xl/light", "2xl/normal", "2xl/semibold", "2xl/bold"],
});

export const Xxxlarge = Proto({
  variants: ["3xl/light", "3xl/normal", "3xl/semibold", "3xl/bold"],
});
