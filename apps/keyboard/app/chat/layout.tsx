import { Metadata } from "next";
import {
  ChatLayoutWrapper,
  ChatRecentInfo,
  ChatRoomList,
  ChatSearchUserInput,
  ChatTabBarOnMobile,
} from "~/components/client";
import { TabProvider } from "~/lib/contexts";
import { requireSignIn } from "~/lib/session";

export const metadata: Metadata = {
  title: "Chat",
  description: "a page for chatting to each users",
};

type ChatLayoutProps = {
  userList: ReactNode;
  recentInfo: ReactNode;
} & LayoutProps;

export default async function ChatLayout({
  children,
  recentInfo,
  userList,
}: ChatLayoutProps) {
  await requireSignIn();

  return (
    <TabProvider>
      <ChatTabBarOnMobile />
      <ChatLayoutWrapper>
        <div className="min-w-full lg:col-span-2 lg:h-[60vh] lg:border-r lg:border-gray-900">
          {children}
        </div>

        {/* replace @recentInfo for bug in deploy url */}
        <div className="min-w-full p-7 lg:h-[60vh] lg:p-10">
          <ChatSearchUserInput />
          <ChatRoomList />
        </div>

        {/* replace @userList for bug in deploy url */}
        <div className="min-w-full lg:col-span-2 lg:h-[30vh] lg:border-r lg:border-t lg:border-gray-900">
          <ChatRecentInfo />
        </div>

        <div className="hidden lg:block lg:h-[30vh] lg:border-t lg:border-t-gray-900"></div>
      </ChatLayoutWrapper>
    </TabProvider>
  );
}
