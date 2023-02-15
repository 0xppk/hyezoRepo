import { Meta, StoryFn } from "@storybook/react";
import { Button, Modal } from "@hyezo/ui";
import { useState } from "react";

export default {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
  argTypes: {
    size: {
      description:
        "The modal size is in proportion of `parent <div>` size. It consist of `height/width`.",
      table: {
        defaultValue: {
          summary: `"long/wide"`,
        },
      },
    },
    color: {
      description: "The background color of modal.",
      table: {
        defaultValue: {
          summary: `"white"`,
        },
      },
    },
  },
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = ({ ...args }) => {
  const [open, setOpen] = useState(true);

  return (
    <div style={{ height: "300px" }}>
      <Button onClick={() => setOpen(true)}>{open ? "닫기" : "열기"}</Button>
      <Modal {...args} open={open} setOpen={setOpen}>
        <Button color="blue">확인</Button>
        <Button onClick={() => setOpen(prev => !prev)} color="red">
          취소
        </Button>
      </Modal>
    </div>
  );
};

export const Sample = Template.bind({});
Sample.args = {
  size: "long/regular",
  color: "s-blue",
};

export const Mini = Template.bind({});
Mini.args = {
  size: "shorter/narrow",
  color: "s-blue",
};

export const Basic = Template.bind({});
Basic.args = {
  size: "regular/regular",
  color: "s-blue",
};

export const Large = Template.bind({});
Large.args = {
  size: "longer/wide",
  color: "s-blue",
};
