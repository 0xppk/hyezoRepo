import { Meta, StoryFn } from "@storybook/react";
import { Button, Modal } from "@hyezo/ui";
import { useState } from "react";

export default {
  title: "UI/Modal",
  component: Modal,
  argTypes: {
    width: {
      description: "The modal width.",
      table: {
        defaultValue: {
          summary: "regular",
        },
      },
    },
    center: {
      description: "If this is `true`, the modal will be centered.",
      table: {
        defaultValue: {
          summary: false,
        },
      },
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = ({ center, width, ...args }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center">
        <Button onClick={() => setOpen(true)} color="black">
          Open Modal
        </Button>
      </div>

      <Modal
        isOpen={open}
        className={`h-[10vh] bg-white`}
        setIsOpen={setOpen}
        width={width}
        center={center}
      >
        <Modal.Content className="grid gap-4">
          <div className="grid w-full justify-between gap-5 duration-700">
            <p>1. 카테고리를 설정해주세요.</p>
            <p>1. 카테고리를 설정해주세요.</p>
            <p>1. 카테고리를 설정해주세요.</p>
            <p>1. 카테고리를 설정해주세요.</p>
          </div>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const Sample = Template.bind({});
Sample.args = {
  center: false,
  width: "wide",
};
Sample.parameters = {
  backgrounds: {
    default: "default",
    values: [
      {
        name: "default",
        value: "linear-gradient(90deg, #8BC6EC 0%, #9599E2 100%)",
      },
    ],
  },
};
