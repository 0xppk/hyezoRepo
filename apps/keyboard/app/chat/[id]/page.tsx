import { ChatInput, ChatList, ChatRecentInfo } from "~/components/client";
import { ChatSearchUsers } from "~/components/client";

export default function ChatRoom({ params }: PageProps<{ id: string }>) {
  const { id: selectedRoomId } = params;

  return (
    <>
      <div className="grid-rows-chat-layout grid h-[60vh] items-end gap-5 p-7 pb-5">
        <ChatList chatRoomId={selectedRoomId} />
        <ChatInput chatRoomId={selectedRoomId} />
      </div>
    </>
  );
}
