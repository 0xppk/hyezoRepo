import { Meta, StoryFn } from "@storybook/react";
import { InputSimple } from "@hyezo/ui";

export default {
  title: "UI/Input",
  component: InputSimple,
  tags: ["autodocs"],
  argTypes: {
    submitAction: {
      description:
        "Submit Handler. Runs on clicking Button. Input value comes in as first parameter.",
      table: {
        type: { summary: "(inputState: string, ...args: unknown[]) => void" },
        defaultValue: { summary: "[optional]" },
      },
    },
  },
} as Meta<typeof InputSimple>;

const Template: StoryFn<typeof InputSimple> = args => <InputSimple {...args} />;

export const Sample = Template.bind({});
Sample.args = {
  submitAction: value => alert(value + " 〰️ 닉네임 생성 완료"),
  placeholder: "닉네임을 입력하세요",
};
Sample.parameters = {
  docs: {
    source: {
      code: `<Input
  submitAction={ value => alert(value)}
  placeholder="닉네임을 입력하세요"
/>`,
      language: "tsx",
      type: "auto",
    },
  },
};
