import { redirect } from "next/navigation";
import { ChatInput, ChatList } from "~/components/client";
import { getCurrentUser } from "~/lib/session";

export default async function ChatRoom({ params }: PageProps) {
  const selectedRoomId = params.id as string;
  const user = await getCurrentUser();

  if (!user) redirect("/login");

  return (
    <div className="flex h-full flex-col flex-nowrap">
      <ChatList chatRoomId={selectedRoomId} />
      <ChatInput chatRoomId={selectedRoomId} />
    </div>
  );
}
