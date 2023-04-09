import { ChatSearchUsers, ChatRecentInfo } from "~/components/client";
import { requireSignIn } from "~/lib/session";

export default async function ChatLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <>
      <div className="col-span-2">{children}</div>
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
