import { StoryFn, Meta } from "@storybook/react";
import { Form, Input, TextArea, SubmitButton, Select, SelectOption } from "@hyezo/ui";

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

export const SelectForm = Template.bind({});
SelectForm.args = {
  children: (
    <Select label="stack" type="select">
      <SelectOption category="I like 💙" items={["리액트", "넥스트", "테일윈드"]} />
      <SelectOption
        category="I can 🧤"
        items={["스타일 컴퍼넌트", "그큐엘", "아스트로"]}
      />
    </Select>
  ),
};

export const SyntheticForm = Template.bind({});
SyntheticForm.args = {
  children: (
    <>
      <Input label="email" type="email" placeholder="이메일" />
      <Input label="url" type="url" placeholder="https://www." />
      <TextArea label="message" />
      <Select label="stack" type="select">
        <SelectOption category="I like 💙" items={["리액트", "넥스트", "테일윈드"]} />
        <SelectOption
          category="I can 🧤"
          items={["스타일 컴퍼넌트", "그큐엘", "아스트로"]}
        />
      </Select>
    </>
  ),
};
