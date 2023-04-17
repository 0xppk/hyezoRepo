import { ChatInput, ChatList } from "~/components/client";

export default function ChatRoom({ params }: PageProps<{ id: string }>) {
  const { id: selectedRoomId } = params;

  return (
    <div className="grid-rows-chat-layout grid h-full items-end gap-5 p-7">
      <ChatList chatRoomId={selectedRoomId} />
      <ChatInput chatRoomId={selectedRoomId} />
    </div>
  );
}
