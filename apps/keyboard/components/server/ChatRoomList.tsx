"use client";

import Link from "next/link";
import { z } from "zod";
import { Text } from "@hyezo/ui";
import { useLoadChatRooms, useUserSession } from "~/hooks";

const ChatRoomSchema = (myNickname: string) =>
  z
    .array(
      z.object({
        id: z.string().cuid(),
        createdAt: z.string(),
        ChatParticipant: z
          .array(
            z.object({
              user: z.object({
                id: z.string().cuid(),
                nickname: z.string().nullable(),
                image: z.string().nullable(),
              }),
            }),
          )
          .transform(arr => {
            const exceptMe = arr.filter(obj => !(obj.user.nickname === myNickname));
            return exceptMe.reduce((acc, obj) => ({ ...acc, obj }));
          }),
      }),
    )
    .transform(data =>
      data
        .map(item => {
          const { ChatParticipant, id: chatRoomId, ...rest } = item;
          return {
            ...rest,
            chatRoomId,
            user: { ...item.ChatParticipant.user },
          };
        })
        .sort(({ createdAt: a }, { createdAt: z }) => +new Date(z) - +new Date(a)),
    );

export default function ChatRoomList() {
  const user = useUserSession();
  const { chatRooms } = useLoadChatRooms();
  if (!chatRooms || !user?.nickname) return null;

  const chatRoomList = ChatRoomSchema(user.nickname).parse(chatRooms);

  return (
    <div>
      <Text variant="2xl/bold"></Text>
      {chatRoomList.map(({ chatRoomId, user: { image, nickname } }) => {
        return (
          <div key={chatRoomId} className="my-5 flex items-center gap-3">
            <img
              className="rounded-full"
              width={40}
              height={40}
              src={image || ""}
              alt="프로필 사진"
            />
            <Link href={`/chat/${chatRoomId}`}>{nickname}</Link>
          </div>
        );
      })}
    </div>
  );
}