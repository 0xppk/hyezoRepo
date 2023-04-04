import { useEffect } from "react";
import { KeyedMutator } from "swr";
import { clientPusher } from "~/server/pusher";

export default function useSubscribeNewMessage(
  messages: Message[] | undefined,
  reloadMessages: KeyedMutator<Message[]>,
) {
  useEffect(() => {
    const channel = clientPusher.subscribe("messages");
    channel.bind("new-message", async (newMessage: Message) => {
      if (!messages) return;
      if (messages.find(message => message.id === newMessage.id)) return;
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, reloadMessages]);
}
