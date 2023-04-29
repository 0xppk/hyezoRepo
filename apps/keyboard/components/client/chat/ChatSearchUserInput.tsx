import { Form, KeyboardComboBox, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { Icons } from "~/components/server";
import { useLoadChatRooms, useQueryString, useUserSession } from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { type TUser } from "~/types/prisma";

type ChatSearchUserInput = {
  users: TUser[];
};

export default function ChatSearchUserInput({ users }: ChatSearchUserInput) {
  const { reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();
  const router = useRouter();
  const myUser = useUserSession();
  const allUsers = useMemo(
    () => users.filter(user => user.id !== myUser?.id),
    [users, myUser],
  );

  const onSubmit: zodSubmitHandler = async ({ allUsersCombo: targetUser }) => {
    const { chatRoomId } = await fetchPost<{ chatRoomId: string }>(
      "/api/createChatRoom",
      {
        body: JSON.stringify(targetUser?.id),
      },
    );
    await reloadChatRooms();
    router.push(`/chat/${chatRoomId}?${createQueryString("authorId", targetUser?.id)}`);
  };

  return (
    <Form onSubmit={onSubmit} className="relative min-w-full flex-row items-center">
      <KeyboardComboBox
        name="allUsersCombo"
        list={allUsers}
        labelKey="nickname"
        imageKey="image"
      />
      <SubmitButton className="absolute flex h-10 items-center border-none bg-transparent px-0 py-2 pl-3 text-black/70 hover:text-black/90">
        <Icons.search className="h-5 w-5" />
      </SubmitButton>
    </Form>
  );
}
