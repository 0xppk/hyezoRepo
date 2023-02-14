import { StoryFn, Meta } from "@storybook/react";
import { Select, SelectOption, Form, SubmitButton } from "@hyezo/ui";

export default {
  title: "UI/Select",
  component: Select,
  tags: ["autodocs"],
  argTypes: {
    label: {
      description: "The title of select box.",
    },
    children: {
      description:
        "Inside `<Select>` component, you can pass `children`. It is recommended to use `<SelectOption>` component. Please refer to `<SelectOption>` for more information.  \n`ReactNode`",
      control: {
        type: "",
      },
    },
    type: {
      description: "The type of the input. It should be provided as `select` value.",
    },
    multiple: {
      description:
        "If this option is set to `true`, the select box will allow multiple selections.",
    },
    disabled: {
      description: "If this option is set to `true`, the select box will be disabled.",
    },
  },
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = ({ label, children, ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <Select label={label} {...args}>
        {children}
      </Select>
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Basic",
  children: <SelectOption items={["사과", "딸기", "수박", "메론"]} />,
};

export const Multiple = Template.bind({});
Multiple.args = {
  multiple: true,
  children: <SelectOption items={["사과", "딸기", "수박", "메론"]} />,
};

export const Group = Template.bind({});
Group.args = {
  label: "재고",
  children: (
    <>
      <SelectOption category="과일" disable={["복숭아"]} items={["포도", "복숭아", "참외"]} />
      <SelectOption category="과자" items={["프링글스", "초코송이", "칸초"]} />
    </>
  ),
};
