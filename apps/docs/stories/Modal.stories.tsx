import { StoryFn, Meta } from "@storybook/react";
import { Modal } from "@hyezo/ui/Modal";

export default {
  title: "UI/Modal",
  component: Modal,
  tags: ["autodocs"],
} as Meta<typeof Modal>;

const Template: StoryFn<typeof Modal> = ({ ...args }) => <Modal />

export const Sample = Template.bind({});
Sample.args = {};
