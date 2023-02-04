import { StoryFn, Meta } from "@storybook/react";
import { Form } from "@hyezo/ui/Form";
import { Input } from "@hyezo/ui/InputWithForm";
import { SubmitButton } from "@hyezo/ui/SubmitButton";
import { TextArea } from "@hyezo/ui/TextArea";
import { useRef } from "react";
import { useForm } from "react-hook-form";

export default {
  title: "UI/Form",
  component: Form,
  tags: ["autodocs"],
} as Meta<typeof Form>;

const Template: StoryFn<typeof Form> = ({ ...args }) => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const form = useForm();

  return (
    <Form
      form={form}
      onSubmit={async data => {
        await new Promise(r => setTimeout(r, 1000));
        alert(JSON.stringify(data));
      }}
    >
      <Input label="id" name="id" type="text" ref={inputRef1} />
      <Input label="password" name="pass" type="password" ref={inputRef2} />
      <SubmitButton>암호를 입력하세요</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
