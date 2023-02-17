import { useZodForm } from "@hyezo/hooks";
import { Form, SelectSub, SubmitButton } from "@hyezo/ui";
import { Meta, StoryFn } from "@storybook/react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

export default {
  title: "UI/SelectSub",
  component: SelectSub,
  tags: ["autodocs"],
  argTypes: {},
} as Meta<typeof SelectSub>;

const people: Person[] = [
  { id: 1, name: "Durward Reynolds", unavailable: false },
  { id: 2, name: "Kenton Towne", unavailable: false },
  { id: 3, name: "Therese Wunsch", unavailable: false },
  { id: 4, name: "Benedict Kessler", unavailable: true },
  { id: 5, name: "Katelyn Rohan", unavailable: false },
  { id: 6, name: "Durward Reynolds", unavailable: false },
];

type Person = {
  name: string;
  id: number;
  unavailable: boolean;
};

const Template: StoryFn<typeof SelectSub> = ({ ...args }) => {
  return (
    <Form onSubmit={data => alert(JSON.stringify(data))}>
      <SelectSub list={people} />
      <SubmitButton>Submit</SubmitButton>
    </Form>
  );
};

export const Basic = Template.bind({});
Basic.args = {};
