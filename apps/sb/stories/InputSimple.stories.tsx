import { Meta, StoryFn } from "@storybook/react";
import { InputSimple } from "@hyezo/ui";
import { useState } from "react";

export default {
  title: "UI/InputSimple",
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

type TExample = {
  id: number;
  name: string;
}[];
const example = [
  { id: 0, name: "foo" },
  { id: 1, name: "bar" },
];
const Template: StoryFn<typeof InputSimple> = args => {
  const [data, setData] = useState<TExample>(example);

  return (
    <div className="flex items-center justify-center bg-black">
      <InputSimple<{ id: number; name: string }>
        {...args}
        data={data}
        setData={setData}
      />
    </div>
  );
};

export const Sample = Template.bind({});
Sample.args = {
  labelKeys: ["foo"],
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
