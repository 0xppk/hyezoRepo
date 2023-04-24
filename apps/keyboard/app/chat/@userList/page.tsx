import { ChatRoomList, ChatSearchUserInput } from "~/components/client";

export default function ChatUserListSection() {
  return (
    <div className="min-w-full p-7 lg:h-[60vh] lg:p-10">
      <ChatSearchUserInput />
      <ChatRoomList />
    </div>
  );
}
