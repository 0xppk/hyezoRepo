"use client";

import { useState } from "react";
import { ChatRecentInfo, ChatSearchUsers } from "~/components/client";
import { Icons } from "~/components/server";

export default function ChatLayout({ children }: LayoutProps) {
  const [tab, setTab] = useState("userList");

  return (
    <>
      <div className="flex h-[5vh] w-screen items-center justify-center gap-10 lg:hidden">
        <Icons.chatroom className="h-5 w-5" onClick={() => setTab("chat")} />
        <Icons.userList className="h-5 w-5" onClick={() => setTab("userList")} />
        <Icons.userInfo className="h-5 w-5" onClick={() => setTab("userInfo")} />
      </div>
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
