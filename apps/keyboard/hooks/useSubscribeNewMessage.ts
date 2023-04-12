import { useEffect } from "react";
import { KeyedMutator } from "swr";
import { clientPusher } from "~/server/pusher";

export default function useSubscribeNewMessage(
  messages: Message[] | undefined,
  reloadMessages: KeyedMutator<Message[]>,
  chatRoomId: string,
) {
  useEffect(() => {
    const channel = clientPusher.subscribe(chatRoomId);
    channel.bind("new-message", async (newMessage: Message) => {
      // if (!messages) return;
      // if (messages?.find(message => message.id === newMessage.id)) return;
      // console.log(newMessage);

      const sendNotification = () => {
        const title = "hello-keyboard";
        const body = newMessage.message;
        const icon = "/images/logo.png";
        const options = { body, icon };

        return new Notification(title, options);
      };

      try {
        await Notification.requestPermission();
        sendNotification();
        console.log("success!", sendNotification());
      } catch (error) {
        console.log("error!");
      }
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages, reloadMessages, clientPusher, chatRoomId]);
}
