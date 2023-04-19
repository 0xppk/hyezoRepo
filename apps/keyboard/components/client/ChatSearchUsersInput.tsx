import { ComboBox, Form, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { Session } from "next-auth";
import { useRouter } from "next/navigation";
import { useLoadAllUsers, useLoadChatRooms, useQueryString } from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { Icons } from "../server";

export default function ChatSearchUsersInput() {
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
  };

  return (
    <Form onSubmit={onSubmit} className="relative flex-row items-center">
      <ComboBox<Session["user"]>
        name="allUsersCombo"
        list={allUsers || []}
        labelKey="nickname"
        imageKey="image"
        color="twitter"
      />
      <SubmitButton className="absolute right-0 flex h-full items-center rounded-l-none">
        <Icons.search className="h-5 w-5" />
      </SubmitButton>
    </Form>
  );
}
