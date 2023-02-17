import { Meta, StoryFn } from "@storybook/react";
import { Button, Modal, ModalContent } from "@hyezo/ui";
import { useState } from "react";

export default {
  title: "UI/Modal",
  component: Modal,
  // tags: ["autodocs"],
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
        setIsOpen={setOpen}
        width={width}
        center={center}
        title="It just Test"
      >
        <ModalContent>
          I don'k know what you want to do. But if I find you need it, I can help.
        </ModalContent>
        <div className="mt-5 flex space-x-4">
          <Button onClick={() => setOpen(false)} color="twitter" fullWidth={center}>
            Okay, I understand.
          </Button>
        </div>
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
      {
        name: "facebook",
        value: "#3b5998",
      },
    ],
  },
};
