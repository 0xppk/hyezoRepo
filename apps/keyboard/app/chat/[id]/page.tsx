import { ChatInput, ChatList } from "~/components/client";

export default function ChatRoom({ params }: PageProps) {
  const selectedRoomId = params.id as string;

  return (
    <div className="col-span-3 rounded-2xl bg-white p-5">
      <ChatList chatRoomId={selectedRoomId} />
      <ChatInput chatRoomId={selectedRoomId} />
    </div>
  );
}
