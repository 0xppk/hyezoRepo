import { ChatInput, ChatList } from "~/components/client";

export default function ChatRoom({ params }: PageProps) {
  const selectedRoomId = params.id as string;

  return (
    <div className="grid-rows-chat-layout grid h-full items-end gap-5 p-10">
      <ChatList chatRoomId={selectedRoomId} />
      <ChatInput chatRoomId={selectedRoomId} />
    </div>
  );
}
 