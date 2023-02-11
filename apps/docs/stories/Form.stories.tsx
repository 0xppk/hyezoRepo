import { StoryFn, Meta } from "@storybook/react";
import { Form } from "@hyezo/ui/Form";
import { Input } from "@hyezo/ui/InputWithForm";
import { SubmitButton } from "@hyezo/ui/SubmitButton";

export default {
  title: "UI/Form",
  component: Form,
  tags: ["autodocs"],
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = ({ ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <Input label="email" type="email" />
      <Input label="password" type="password" />
    <SubmitButton>암호를 입력하세요</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
