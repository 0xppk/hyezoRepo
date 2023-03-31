import { ChatSearchUsers } from "~/components/client";

export default function ChatLayout({ children }: LayoutProps) {
  return (
    <div className="grid w-screen grid-cols-4 gap-5 overflow-hidden px-10">
      <div className="col-span-1 rounded-2xl bg-blue-900 p-3">
        <ChatSearchUsers />
      </div>
      <div className="col-span-3 rounded-2xl bg-white p-5">{children}</div>
    </div>
  );
}
