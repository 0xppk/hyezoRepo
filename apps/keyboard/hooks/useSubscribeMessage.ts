import { useEffect } from "react";
import { KeyedMutator } from "swr";
import { fetcher as fetch } from "~/lib/utils";
import { clientPusher } from "~/server/pusher";

export default function useSubscribeNewMessage(
  messages: Message[] | undefined,
  reloadMessages: KeyedMutator<Message[]>,
  chatRoomId: string,
) {
  useEffect(() => {
    const channel = clientPusher.subscribe(chatRoomId);
    channel.bind("new-message", async (newMessage: Message) => {
      if (!messages) return;
      if (messages?.find(message => message.id === newMessage.id)) return;

      const fetcher = async () => {
        const data = await fetch<Message[]>(`/api/getMessages/${chatRoomId}`);
        return data;
      };

      await reloadMessages(fetcher, {
        optimisticData: [...messages, newMessage],
        populateCache: true,
        revalidate: false,
        rollbackOnError: true,
      });
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, clientPusher, reloadMessages, chatRoomId]);
}
