import { Form, Input, SubmitButton } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({ type, ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <Input label={type} type={type} placeholder="입력란" />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {
  type: "text"
};
