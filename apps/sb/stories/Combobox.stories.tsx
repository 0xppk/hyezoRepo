import { Form, ComboBox, SubmitButton } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";

export default {
  title: "UI/ComboBox",
  component: ComboBox,
  argTypes: {
    color: {
      control: "select",
      options: ["twitter", "orange", "pink", "emerald", "darkNavy"],
      description: "콤보박스 리스트의 마우스 호버 색상을 정합니다",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "twitter" },
      },
    },
    width: {
      control: "select",
      options: ["narrower", "narrow", "regular", "wide", "wider"],
      description: "콤보박스 리스트의 최대 넓이를 지정합니다",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "twitter" },
      },
    },
    name: {
      control: "select",
      options: ["combo"],
    },
  },
} as Meta<typeof ComboBox>;

const List = [
  { id: 1, title: "Javascript" },
  { id: 2, title: "Typescript" },
  { id: 3, title: "GraphQL" },
  { id: 4, title: "Zod" },
  { id: 5, title: "React" },
];

const Template: StoryFn<typeof ComboBox> = ({ ...args }) => {
  return (
    <div className="fixed inset-0 flex w-screen items-center justify-center">
      <Form onSubmit={({ objDataCombo }) => alert(objDataCombo?.title)}>
        <ComboBox
          {...args}
          list={List}
          labelKey="title"
          name="objDataCombo"
          color="pink"
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export const Sample = Template.bind({});
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
