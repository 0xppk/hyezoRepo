"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { ChatTabBar } from "~/components/client";
import { useForceLinkToCreateNickname } from "~/hooks";

const ChatSearchUsers = dynamic(() => import("~/components/client/ChatSearchUsers"), {
  ssr: false,
});
const ChatRecentInfo = dynamic(() => import("~/components/client/ChatRecentInfo"), {
  ssr: false,
});

export default function ChatLayout({ children }: LayoutProps) {
  const [tab, setTab] = useState("userList");
  useForceLinkToCreateNickname();

  return (
    <>
      <ChatTabBar setTab={setTab} />
      <div
        className={`flex h-[85vh] w-screen duration-200 lg:contents lg:h-full ${
          tab === "chat"
            ? "translate-x-0"
            : tab === "userList"
            ? "-translate-x-full"
            : "-translate-x-[200%]"
        }`}
      >
        <div className="min-w-full lg:col-span-2 lg:h-[60vh] lg:border-r lg:border-gray-900">
          {children}
        </div>
        <div className="min-w-full p-7 lg:h-[60vh] lg:p-10">
          <ChatSearchUsers setTab={setTab} />
        </div>
        <div className="min-w-full lg:col-span-2 lg:h-[30vh] lg:border-r lg:border-t lg:border-gray-900">
          <ChatRecentInfo />
        </div>
        <div className="hidden lg:block lg:h-[30vh] lg:border-t lg:border-t-gray-900"></div>
      </div>
    </>
  );
}
