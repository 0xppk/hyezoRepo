"use client";

import { ChatLandingBanner } from "~/components/client";
import { useForceLinkToCreateNickname } from "~/hooks";

export default function ChatPage() {
  useForceLinkToCreateNickname();
  return <ChatLandingBanner />;
}
