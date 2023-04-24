import { useContext } from "react";
import { TabContext } from "~/lib/contexts";
import { Icons } from "~/components/server";

export default function ChatTabBarOnMobile() {
  const { setTab } = useContext(TabContext);

  return (
    <div className="flex h-[10vh] w-screen items-center justify-center gap-10 py-6 lg:hidden">
      <Icons.chatroom className="h-5 w-5" onClick={() => setTab("chat")} />
      <Icons.userList className="h-5 w-5" onClick={() => setTab("userList")} />
      <Icons.userInfo className="h-5 w-5" onClick={() => setTab("userInfo")} />
    </div>
  );
}
