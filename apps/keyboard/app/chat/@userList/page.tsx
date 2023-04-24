import { ChatRoomList, ChatSearchUserInput } from "~/components/client";
import { requireSignIn } from "~/lib/session";

export default async function ChatUserListSection() {
  await requireSignIn();

  return (
    <div className="min-w-full p-7 lg:h-[60vh] lg:p-10">
      <ChatSearchUserInput />
      <ChatRoomList />
    </div>
  );
}
