import { Form, Input, SubmitButton, TextArea } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/Form",
  component: Form,
  tags: ["autodocs"],
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = ({ children, ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      {children}
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const InputForm = Template.bind({});
InputForm.args = {
  children: (
    <>
      <Input label="email" type="email" name="email" />
      <Input label="password" type="password" name="password" />
    </>
  ),
};

export const TextareaForm = Template.bind({});
TextareaForm.args = {
  children: <TextArea label="message" name="textarea" />,
};

export const SyntheticForm = Template.bind({});
SyntheticForm.args = {
  children: (
    <>
      <Input label="email" type="email" name="email" />
      <Input label="url" type="url" name="url" />
      <TextArea placeholder="메시지를 입력하세요" name="textarea" />
    </>
  ),
};
