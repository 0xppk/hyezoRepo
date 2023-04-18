import { Dispatch, SetStateAction } from "react";
import { ChatRoomList, ChatSearchUsersInput } from "~/components/client";

type TChatSearchUsersProps = {
  setTab: Dispatch<SetStateAction<string>>;
};

export default function ChatSearchUsers({ setTab }: TChatSearchUsersProps) {
  return (
    <>
      <ChatSearchUsersInput />
      <ChatRoomList setTab={setTab} />
    </>
  );
}
