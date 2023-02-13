import { StoryFn, Meta } from "@storybook/react";
import { Form, Input, TextArea, SubmitButton } from "@hyezo/ui";

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
      <Input label="email" type="email" />
      <Input label="password" type="password" />
    </>
  ),
};

export const TextareaForm = Template.bind({});
TextareaForm.args = {
  children: <TextArea label="message" />,
};
