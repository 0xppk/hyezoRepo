import { StoryFn, Meta } from "@storybook/react";
import { TextArea, Form, SubmitButton } from "@hyezo/ui";

export default {
  title: "UI/TextArea",
  component: TextArea,
  tags: ["autodocs"],
} as Meta<typeof TextArea>;

const Template: StoryFn<typeof TextArea> = ({ label, ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <TextArea {...args} label="Message" name="textarea" required />
      <SubmitButton>제출</SubmitButton>
    </Form>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
