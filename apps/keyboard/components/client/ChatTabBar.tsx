import { Dispatch, SetStateAction } from "react";
import Icons from "../server/Icons";

type ChatTabBarProps = {
  setTab: Dispatch<SetStateAction<string>>;
};

export default function ChatTabBar({ setTab }: ChatTabBarProps) {
  return (
    <div className="flex h-[5vh] w-screen items-center justify-center gap-10 lg:hidden">
      <Icons.chatroom className="h-5 w-5" onClick={() => setTab("chat")} />
      <Icons.userList className="h-5 w-5" onClick={() => setTab("userList")} />
      <Icons.userInfo className="h-5 w-5" onClick={() => setTab("userInfo")} />
    </div>
  );
}
