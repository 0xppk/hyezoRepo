import { ChatInput, ChatList } from "~/components/client";

export default function ChatRoom({ params }: PageProps) {
  const selectedRoomId = params.id as string;

  return (
    <div className="flex h-full flex-col flex-nowrap">
      <ChatList chatRoomId={selectedRoomId} />
      <ChatInput chatRoomId={selectedRoomId} />
    </div>
  );
}
