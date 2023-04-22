import { use } from "react";
import { TabContext } from "~/lib/contexts";

type TChatLayoutWrapper = {
  children: ReactNode;
};

export default function ChatLayoutWrapper({ children }: TChatLayoutWrapper) {
  const { tab } = use(TabContext);

  return (
    <div
      className={`flex h-[85vh] w-screen duration-200 lg:contents lg:h-full ${
        tab === "chat"
          ? "translate-x-0"
          : tab === "userList"
          ? "-translate-x-full"
          : "-translate-x-[200%]"
      }`}
    >
      {children}
    </div>
  );
}
