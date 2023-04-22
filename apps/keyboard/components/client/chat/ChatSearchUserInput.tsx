import { ComboBox, Form, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { useRouter } from "next/navigation";
import { useLoadAllUsers, useLoadChatRooms, useQueryString } from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { type TUser } from "~/types/prisma";
import { Icons } from "~/components/server";

export default function ChatSearchUserInput() {
  const { allUsers } = useLoadAllUsers();
  const { reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();
  const router = useRouter();

  const onSubmit: zodSubmitHandler = async ({ allUsersCombo: targetUser }) => {
    const { chatRoomId } = await fetchPost<{ chatRoomId: string }>(
      "/api/createChatRoom",
      {
        body: JSON.stringify(targetUser?.id),
      },
    );
    router.push(`/chat/${chatRoomId}?${createQueryString("authorId", targetUser?.id)}`);
    reloadChatRooms();
  };

  return (
    <Form onSubmit={onSubmit} className="relative flex-row items-center">
      <ComboBox<TUser>
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
