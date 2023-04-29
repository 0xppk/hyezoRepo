import { Meta, StoryFn } from "@storybook/react";
import { InputSimple } from "@hyezo/ui";
import { useState } from "react";

export default {
  title: "UI/InputSimple",
  component: InputSimple,
  tags: ["autodocs"],
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
    <div className="flex h-52 justify-center bg-black ">
      <InputSimple {...args} data={data} setData={setData} labelKeys={["name"]} />
    </div>
  );
};

export const Sample = Template.bind({});
Sample.args = {
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
