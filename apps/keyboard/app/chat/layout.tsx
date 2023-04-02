"use client";
import { ChatSearchUsers } from "~/components/client";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <div className="grid w-full grid-cols-4 gap-4 px-2">
      <div className="col-span-4 rounded-2xl bg-white p-3 sm:col-span-3">{children}</div>
      <div className="col-span-1 hidden h-min rounded-2xl bg-blue-900 p-3 sm:block">
        <ChatSearchUsers />
      </div>
    </div>
  );
}
