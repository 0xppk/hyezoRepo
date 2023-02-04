import { Meta, StoryFn } from "@storybook/react";
import { Input } from "@hyezo/ui/InputWithoutForm";

export default {
  title: "UI/InputWithoutForm",
  component: Input,
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
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = args => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  submitAction: value => alert(value + " 〰️ 닉네임 생성 완료"),
  placeholder: "닉네임을 입력하세요",
};
Default.parameters = {
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
