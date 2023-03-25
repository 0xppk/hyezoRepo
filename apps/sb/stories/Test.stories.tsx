import { StoryFn, Meta } from "@storybook/react";
import { Test, Form, SubmitButton, Button } from "@hyezo/ui";
import { useState } from "react";

export default {
  title: "UI/Test",
  component: Test,
  tags: ["autodocs"],
} as Meta<typeof Test>;

const list = [
  { id: 1, name: "Javascript", group: "Korea" },
  { id: 2, name: "React", group: "Korea" },
  { id: 3, name: "GraphQL", group: "Japan" },
  { id: 4, name: "Zod", group: "France" },
  { id: 5, name: "Nextjs", group: "Brazil" },
];

const Template: StoryFn<typeof Test> = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <Button onClick={() => setOpen(true)} color="black">
          Open Modal
        </Button>
      </div>
      <Test isOpen={open} setIsOpen={setOpen} list={list} />
    </>
  );
};

export const Sample = Template.bind({});
Sample.args = {};
