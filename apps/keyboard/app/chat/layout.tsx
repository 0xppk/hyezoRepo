import { Metadata } from "next";
import { ChatLayoutWrapper, ChatTabBarOnMobile } from "~/components/client";
import { TabProvider } from "~/lib/contexts";

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
  return (
    <TabProvider>
      <ChatTabBarOnMobile />
      <ChatLayoutWrapper>
        <div className="min-w-full lg:col-span-2 lg:h-[60vh] lg:border-r lg:border-gray-900">
          {children}
        </div>
        {userList}
        {recentInfo}
        <div className="hidden lg:block lg:h-[30vh] lg:border-t lg:border-t-gray-900"></div>
      </ChatLayoutWrapper>
    </TabProvider>
  );
}
