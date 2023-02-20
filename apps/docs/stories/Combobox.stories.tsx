import { Form, ComboBox, SubmitButton } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/ComboBox",
  component: ComboBox,
  argTypes: {},
} as Meta<typeof ComboBox>;

const List = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "Typescript" },
  { id: 3, name: "GraphQL" },
  { id: 4, name: "Zod" },
  { id: 5, name: "React" },
];

const Template: StoryFn<typeof ComboBox> = ({ ...args }) => {
  return (
    <div className="fixed inset-0 flex w-screen items-center justify-center">
      <Form onSubmit={data => alert(JSON.stringify(data))}>
        <ComboBox {...args} list={List} />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
Sample.parameters = {
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value:
          "background-color: #FAACA8; background-image: linear-gradient(300deg, #FAACA8 0%, #DDD6F3 100%);",
      },
    ],
  },
};
