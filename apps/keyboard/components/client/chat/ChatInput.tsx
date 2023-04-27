import { Form, Input, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { v4 } from "uuid";
import { z } from "zod";
import { Icons } from "~/components/server";
import { useCheckNowSeeing, useLoadMessages, useUserSession } from "~/hooks";
import { fetchPost } from "~/lib/utils";

const Message = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  username: z.string(),
  message: z.string().min(1),
  created_at: z.number(),
  profilePic: z.string(),
});

const sendMessageSchema = Message;

type ChatInputProps = {
  chatRoomId: string;
};

export default function ChatInput({ chatRoomId }: ChatInputProps) {
  const user = useUserSession();
  const { messages, reloadMessages } = useLoadMessages(chatRoomId);
  const {
    nowSeeing: areYouSeeing,
    reloadNowSeeing,
    authorId,
  } = useCheckNowSeeing(chatRoomId);

  const onSubmit: zodSubmitHandler = async ({ text: messageToSend }) => {
    if (!messageToSend || !user) return;
    const id = v4();
    const { id: userId, image, nickname } = user;

    const message: Message = {
      id,
      userId,
      message: messageToSend,
      created_at: Date.now(),
      username: nickname ?? `${userId} 님`,
      profilePic: image ?? "/images/pingu.webp",
    };

    const uploadMesageToUpstash = async () => {
      const res = await fetchPost(`/api/sendMessage/${chatRoomId}`, {
        body: JSON.stringify({ message }),
      });

      const newMessage = sendMessageSchema.parse(res);
      const mergedMessages = [...messages, newMessage];
      return mergedMessages;
    };

    await reloadMessages(uploadMesageToUpstash, {
      optimisticData: [...messages, message],
      populateCache: true,
      revalidate: false,
      rollbackOnError: true,
    });

    // TODO 로컬스토리지로 대체해도 될까?
    await reloadNowSeeing();

    if (!areYouSeeing)
      try {
        const sendNotification = await fetchPost("/api/sendMessageToFirebase", {
          body: JSON.stringify({
            receiverId: authorId,
            senderId: userId,
            senderName: nickname,
            senderImage: image,
            content: messageToSend,
            chatRoomId,
          }),
        });

        console.log("메시지를 보냈어요 🧤", sendNotification);
        await fetchPost("/api/updateChatRoomLatestMessage", {
          body: JSON.stringify({ updateTime: new Date(), chatRoomId }),
        });
      } catch (error) {
        console.error(error);
      }
  };

  return (
    <Form onSubmit={onSubmit} className="relative h-full flex-row justify-end">
      <Input
        name="text"
        placeholder="메시지를 입력하세요"
        className="rounded-full pl-5 pr-8 text-sm"
        color="transparent"
        fullWidth
      />
      <SubmitButton className="absolute right-0 top-0 grid h-full place-items-center rounded-full rounded-l-none px-4">
        <Icons.send className="h-5 w-5" />
      </SubmitButton>
    </Form>
  );
}
