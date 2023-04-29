import { Form, Input, SubmitButton } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Input",
  component: Input,
  tags: ["autodocs"],
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = ({ name, ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <Input {...args} name="nickname" />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {
  type: "text",
};
