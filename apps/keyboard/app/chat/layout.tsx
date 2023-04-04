import { ChatSearchUsers } from "~/components/client";
import { requireSignIn } from "~/lib/session";

export default async function ChatLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <>
      <div className="col-span-2 h-[90vh] text-white">{children}</div>
      <div className="h-[90vh] border-l border-gray-900 p-10">
        <ChatSearchUsers />
      </div>
    </>
  );
}
