import { useEffect } from "react";
import { KeyedMutator } from "swr";
import { fetcher } from "~/lib/utils";
import { clientPusher } from "~/server/pusher";
import { Message } from "~/types/db";

export default function useSubscribeNewMessage(
  messages: Message[] | undefined,
  reloadMessages: KeyedMutator<Message[]>,
) {
  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", async (newMessage: Message) => {
      if (!messages) return;
      if (messages.find(message => message.id === newMessage.id)) return;

      reloadMessages(fetcher("/api/getMessages"), {
        optimisticData: [newMessage, ...messages],
        rollbackOnError: true,
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, reloadMessages]);
}
