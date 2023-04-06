"use client";

import Image from "next/image";
import {
  useFocusToLatestMessage,
  useSubscribeNewMessage,
  useLoadMessages,
  useUserSession,
} from "~/hooks";
import { useRef } from "react";

type ChatRoomProps = {
  chatRoomId: string;
};

export default function ChatList({ chatRoomId }: ChatRoomProps) {
  const user = useUserSession();
  const { messages, reloadMessages } = useLoadMessages(chatRoomId);
  const messageBoxRef = useRef<HTMLDivElement>(null);

  useSubscribeNewMessage(messages, reloadMessages);
  useFocusToLatestMessage(messageBoxRef, [messages]);

  return (
    <div
      className="flex h-full flex-col justify-end gap-3 overflow-auto"
      ref={messageBoxRef}
    >
      {messages?.map(m => {
        const messageByMe = user?.id === m.userId;
        return (
          <div
            className={`flex w-2/3 items-center gap-3 ${
              messageByMe ? "ml-auto flex-row-reverse" : "flex-row"
            }`}
            key={m.id}
          >
            <div
              key={m.id}
              className={`flex items-center rounded-2xl p-2 py-1 ${
                messageByMe
                  ? "bg-twitter-500 flex-row-reverse"
                  : "flex-row bg-white text-black"
              }`}
            >
              {!messageByMe && (
                <Image
                  className="mx-2 rounded-full"
                  width={40}
                  height={40}
                  src={m.profilePic}
                  alt={m.username}
                />
              )}
              {!messageByMe && <p className="min-w-[2rem]">{m.username}</p>}
              <p className="p-2">{m.message}</p>
            </div>
            <p className="text-[12px] text-gray-400">
              {new Date(m.created_at).toLocaleString()}
            </p>
          </div>
        );
      })}
    </div>
  );
}
