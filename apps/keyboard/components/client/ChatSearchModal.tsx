import { ComboBox, Form, Modal, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { Session } from "next-auth";
import { Dispatch, SetStateAction } from "react";
import { useLoadAllUsers, useLoadChatRooms } from "~/hooks";
import { fetchPost } from "~/lib/utils";

type ChatSearchModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ChatSearchModal({ isOpen, setIsOpen }: ChatSearchModalProps) {
  const { allUsers } = useLoadAllUsers();
  const { reloadChatRooms } = useLoadChatRooms();

  const onSubmit: zodSubmitHandler = async ({ combo: nickname }) => {
    await fetchPost("/api/createChatRoom", {
      body: JSON.stringify(nickname),
    });
    reloadChatRooms();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="regular"
      className="backdrop-blue flex h-96 min-w-max flex-col items-center rounded-xl p-5"
      title="Search Users"
    >
      <Modal.Title className="text-3xl font-bold">Search Users</Modal.Title>
      <Modal.Content className="min-w-[20rem] text-sm text-black">
        <Form onSubmit={onSubmit}>
          <ComboBox<Session["user"], "nickname">
            list={allUsers || []}
            labelKey="nickname"
            className="min-h-[160px]"
            color="twitter"
          />
          <SubmitButton>채팅하기</SubmitButton>
        </Form>
      </Modal.Content>
    </Modal>
  );
}