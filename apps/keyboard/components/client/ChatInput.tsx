"use client";

import { Form, Input, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { v4 } from "uuid";
import { z } from "zod";
import { useLoadMessages, useUserSession } from "~/hooks";
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
  if (!messages) return null;

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
      rollbackOnError: true,
    });
  };

  return (
    <Form onSubmit={onSubmit} className="relative h-full flex-row justify-end">
      <Input
        name="text"
        placeholder="메시지를 입력하세요"
        className="rounded-full text-sm"
        fullWidth
      />
      <SubmitButton className="absolute right-0 top-0 h-full items-center rounded-full px-6">
        전송
      </SubmitButton>
    </Form>
  );
}
