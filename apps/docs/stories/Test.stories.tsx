import { StoryFn, Meta } from "@storybook/react";
import { Test, Form, SubmitButton } from "@hyezo/ui";

export default {
  title: "UI/Test",
  component: Test,
  tags: ["autodocs"],
} as Meta<typeof Test>;

const Template: StoryFn<typeof Test> = () => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <Test />
      <SubmitButton>제출</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
