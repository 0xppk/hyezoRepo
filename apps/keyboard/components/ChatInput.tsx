"use client";

import { Form, Input, SubmitButton, zodSubmitHandler } from "@hyezo/ui";
import { v4 } from "uuid";
import { z } from "zod";
import { useLoadMessages } from "~/hooks";
import { useUserSession } from "~/hooks";

const Message = z.object({
  id: z.string().uuid(),
  userId: z.string(),
  username: z.string(),
  message: z.string().min(1),
  created_at: z.number(),
  profilePic: z.string(),
});

const sendMessageSchema = Message;

export default function ChatInput() {
  const { user } = useUserSession();
  const { messages, mutate } = useLoadMessages();
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
      profilePic: image ?? "/frogmini.png",
    };

    const uploadMesageToUpstash = async () => {
      const res = await await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message }),
      }).then(res => res.json());

      const newMessage = sendMessageSchema.parse(res);
      const mergedMessages = [newMessage, ...messages];
      return mergedMessages;
    };

    await mutate(uploadMesageToUpstash, {
      optimisticData: [message, ...messages],
      rollbackOnError: true,
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input type="text" placeholder="메시지를 입력하세요" />
      <SubmitButton>전송</SubmitButton>
    </Form>
  );
}
