import { ComboBox, Form, Modal, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import { useLoadAllUsers, useLoadChatRooms, useQueryString } from "~/hooks";
import { fetchPost } from "~/lib/utils";

type ChatSearchModalProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export default function ChatSearchModal({
  isOpen,
  setIsOpen,
}: ChatSearchModalProps) {
  const { allUsers } = useLoadAllUsers();
  const { reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();
  const router = useRouter();

  const onSubmit: zodSubmitHandler = async ({ allUsersCombo: targetUser }) => {
    const newChatRoomId = await fetchPost<string>("/api/createChatRoom", {
      body: JSON.stringify(targetUser?.id),
    });
    router.push(
      `/chat/${newChatRoomId}?${createQueryString("authorId", targetUser?.id)}`,
    );
    reloadChatRooms();
    setIsOpen(false);
  };

  return (
    <Modal
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      width="regular"
      className="backdrop-blue flex h-40 flex-col items-center rounded-xl bg-gray-900 p-5"
      title="Search Users"
    >
      <Modal.Title className="font-point text-2xl text-white">
        Search Users
      </Modal.Title>
      <Modal.Content className="min-w-[20rem] text-sm text-black">
        <Form onSubmit={onSubmit}>
          <ComboBox<Session["user"], "nickname">
            name="allUsersCombo"
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
