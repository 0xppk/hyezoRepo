import { Form, KeyboardComboBox, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { useRouter } from "next/navigation";
import { Icons } from "~/components/server";
import { useLoadAllUsers, useLoadChatRooms, useQueryString } from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { type TUser } from "~/types/prisma";

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
    <Form onSubmit={onSubmit} className="relative min-w-full flex-row items-center">
      <KeyboardComboBox<TUser>
        name="allUsersCombo"
        list={allUsers || []}
        labelKey="nickname"
        imageKey="image"
      />
      <SubmitButton className="pointer-events-none absolute flex h-10 items-center border-none bg-transparent py-2 pl-3 text-black/70 hover:text-black/90">
        <Icons.search className="h-5 w-5" />
      </SubmitButton>
    </Form>
  );
}
