"use client";

import Link from "next/link";
import { z } from "zod";
import { useLoadChatRooms, useQueryString, useUserSession } from "~/hooks";

const ChatRoomSchema = (myNickname: string) =>
  z
    .array(
      z.object({
        id: z.string().cuid(),
        createdAt: z.string(),
        chatParticipant: z
          .array(
            z.object({
              user: z.object({
                id: z.string().cuid(),
                nickname: z.string(),
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
          const { chatParticipant, id: chatRoomId, ...rest } = item;
          return {
            ...rest,
            chatRoomId,
            user: { ...item.chatParticipant.user },
          };
        })
        .sort(({ createdAt: a }, { createdAt: z }) => +new Date(z) - +new Date(a)),
    );

export default function ChatRoomList() {
  const user = useUserSession();
  const { chatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();

  if (!chatRooms || !user?.nickname) return null;

  const chatRoomList = ChatRoomSchema(user.nickname).parse(chatRooms);

  return (
    <>
      <section className="container">
        <h2 className="section-title text-acccent"></h2>
        <p className="prose"></p>
      </section>

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
            <Link
              href={`/chat/${chatRoomId}?${createQueryString("authorName", nickname)}`}
            >
              {nickname}
            </Link>
          </div>
        );
      })}
    </>
  );
}
