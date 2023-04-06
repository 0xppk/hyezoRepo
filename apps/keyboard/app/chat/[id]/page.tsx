import { ChatInput, ChatList, ChatRecentInfo } from "~/components/client";
import { ChatSearchUsers } from "~/components/client";

export default function ChatRoom({ params }: PageProps<{ id: string }>) {
  const { id: selectedRoomId } = params;

  return (
    <>
      <div className="col-span-2">
        <div className="grid-rows-chat-layout grid h-[60vh] items-end gap-5 p-7 pb-5">
          <ChatList chatRoomId={selectedRoomId} />
          <ChatInput chatRoomId={selectedRoomId} />
        </div>
      </div>
      <div className="h-[60vh] border-l border-gray-900 p-10">
        <ChatSearchUsers />
      </div>
      <div className="col-span-2 h-[30vh] border-r border-t border-gray-900">
        <ChatRecentInfo />
      </div>
      <div className="h-[30vh] border-t border-t-gray-900"></div>
    </>
  );
}
