import { useContext } from "react";
import { TabContext } from "~/lib/contexts";
import { Icons } from "~/components/server";

export default function ChatTabBar() {
  const { setTab } = useContext(TabContext);

  return (
    <div className="mt-3 flex h-[5vh] w-screen items-center justify-center gap-10 lg:hidden">
      <Icons.chatroom className="h-5 w-5" onClick={() => setTab("chat")} />
      <Icons.userList className="h-5 w-5" onClick={() => setTab("userList")} />
      <Icons.userInfo className="h-5 w-5" onClick={() => setTab("userInfo")} />
    </div>
  );
}
