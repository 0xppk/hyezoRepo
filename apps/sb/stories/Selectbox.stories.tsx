import { Form, SelectBox, SubmitButton } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/SelectBox",
  component: SelectBox,
  argTypes: {},
} as Meta<typeof SelectBox>;

const people = [
  { title: "Javascript" },
  { title: "Typescript" },
  { title: "React" },
  { title: "Nextjs" },
  { title: "Java" },
];

const Template: StoryFn<typeof SelectBox> = ({ ...args }) => {
  return (
    <div className="fixed inset-0 flex w-screen items-center justify-center">
      <Form onSubmit={({ select }) => alert(select)}>
        <SelectBox {...args} list={people} name="select" labelKey="title" />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export const Sample = Template.bind({});
Sample.args = {
  searchBar: true,
  width: "wider",
};
Sample.parameters = {
  backgrounds: {
    default: "default",
    values: [
      {
        name: "second",
        value:
          "background-color: #FAACA8; background-image: linear-gradient(90deg, #FAACA8 0%, #DDD6F3 100%);",
      },
      {
        name: "default",
        value: "linear-gradient(90deg, #fff1eb 0%, #ace0f9 100%);",
      },
    ],
  },
};
