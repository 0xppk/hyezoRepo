"use client";

import { Button } from "@hyezo/ui";
import { useState } from "react";
import { ChatSearchModal } from "~/components/client";
import { ChatRoomList } from "~/components/server";

export default function ChatSearchUsers() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Button onClick={() => setIsOpen(true)} fullWidth>
        Find User
      </Button>
      <ChatRoomList />
      <ChatSearchModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}
