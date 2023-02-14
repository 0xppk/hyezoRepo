import { StoryFn, Meta } from "@storybook/react";
import { Select, SelectOption, Form, SubmitButton } from "@hyezo/ui";

export default {
  title: "UI/SelectOption",
  component: SelectOption,
  tags: ["autodocs"],
  argTypes: {
    items: {
      description:
        "The items of select box list. If duplicate items are provided, only the first one will be displayed.",
    },
    category: {
      description: "The group name of items.",
    },
    disable: {
      description: "Making items in this array disabled.",
    },
  },
} as Meta<typeof SelectOption>;

const Template: StoryFn<typeof SelectOption> = ({ ...args }) => (
  <SelectOption {...args} />
);

interface StoryProps {
  items: (string | number)[];
  disable?: (string | number)[];
  category?: string | undefined;
}

const Proto = ({ items, category, disable }: StoryProps) => ({
  render: () => (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <Select label="Select" type="select" multiple={false}>
        <SelectOption items={items} category={category} disable={disable} />
      </Select>
      <SubmitButton>제출</SubmitButton>
    </Form>
  ),
});

export const Sample = Proto({
  items: ["사과", "딸기", "바나나", "사과", "망고", "수박"],
  category: "과일",
  disable: ["바나나", "딸기"],
});
