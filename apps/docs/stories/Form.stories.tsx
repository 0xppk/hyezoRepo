import { StoryFn, Meta } from "@storybook/react";
import { Form } from "@ui/Form";
import { Input } from "@ui/InputWithForm";
import { SubmitButton } from "@ui/SubmitButton";

export default {
  title: "UI/Form",
  component: Form,
  tags: ["autodocs"],
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = ({ form, onClick, ...args }) => {
  return (
    <Form form={form} onClick={onClick} {...args}>
      <Input label="인풋1" />
      <SubmitButton>내가 누구게</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
