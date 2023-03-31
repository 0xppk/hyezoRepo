"use client";

import { Button } from "@hyezo/ui";
import { useState } from "react";
import { ChatSearchModal } from "~/components/client";
import { ChatRoomList } from "~/components/server";
import { useLoadAllUsers } from "~/hooks";

export default function ChatSearchUsers() {
  const [isOpen, setIsOpen] = useState(false);
  const { reloadAllUsers } = useLoadAllUsers();

  return (
    <>
      <ChatSearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
      <Button
        onClick={() => {
          reloadAllUsers();
          setIsOpen(true);
        }}
        fullWidth
      >
        Find User
      </Button>
      <ChatRoomList />
    </>
  );
}
