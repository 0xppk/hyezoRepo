"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useLoadMessages } from "~/hooks";
import { useUserSession } from "~/hooks";
import { fetcher } from "~/lib/utils";
import { clientPusher } from "~/server/pusher";

type ChatRoomProps = {
  initialMessages: Message[];
};

export default function ChatRoom({ initialMessages }: ChatRoomProps) {
  const { user } = useUserSession();
  const { messages, mutate } = useLoadMessages();

  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", async (data: Message) => {
      if (!messages) return;
      if (messages.find(message => message.id === data.id)) return;

      mutate(fetcher("/api/getMessages"), {
        optimisticData: [data, ...messages],
        rollbackOnError: true,
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, mutate]);

  return (
    <div className="mb-5 grid">
      {(messages || initialMessages).map(m => {
        const messageByMe = user?.id === m.userId;
        return (
          <div
            key={m.id}
            className={`my-1 mx-3 flex w-max max-w-lg items-center rounded-2xl p-2 ${
              messageByMe
                ? "bg-twitter-500 ml-auto flex-row-reverse"
                : "flex-row bg-white text-black"
            }`}
          >
            <Image
              className="mx-2 rounded-full"
              width={40}
              height={40}
              src={m.profilePic}
              alt={m.username}
            />
            {!messageByMe && <p>{m.username}</p>}
            <p className="px-2">{m.message}</p>
            <p>{new Date(m.created_at).toLocaleString()}</p>
          </div>
        );
      })}
    </div>
  );
}
