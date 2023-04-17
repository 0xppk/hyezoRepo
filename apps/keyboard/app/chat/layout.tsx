import { ChatSearchUsers, ChatRecentInfo } from "~/components/client";
import { requireSignIn } from "~/lib/session";

let tab: number = 0;

export default async function ChatLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <div className="relative flex h-[90vh] lg:contents lg:h-full">
      <div className="min-w-full lg:col-span-2 lg:h-[60vh] lg:border-r lg:border-gray-900">
        {children}
      </div>
      <div className="min-w-full lg:h-[60vh] lg:p-10">
        <ChatSearchUsers />
      </div>
      <div className="min-w-full lg:col-span-2 lg:h-[30vh] lg:border-r lg:border-t lg:border-gray-900">
        <ChatRecentInfo />
      </div>
      <div className="hidden lg:block lg:h-[30vh] lg:border-t lg:border-t-gray-900"></div>
    </div>
  );
}
