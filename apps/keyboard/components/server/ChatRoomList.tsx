"use client";

import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import { useLoadChatRooms, useQueryString, useUserSession } from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const ChatRoomSchema = (myUserId: string) =>
  z
    .array(
      z.object({
        id: z.string().cuid(),
        createdAt: z.string(),
        chatParticipant: z
          .array(
            z.object({
              id: z.string().cuid(),
              user: z
                .object({
                  id: z.string().cuid(),
                  nickname: z.string(),
                  image: z.string().nullable(),
                })
                .nullable(),
            }),
          )
          .transform(arr => {
            const myParticipantData = arr.find(obj => obj.user?.id === myUserId);
            const theOthersUserData = arr.filter(obj => obj.user?.id !== myUserId);

            return { ...theOthersUserData[0], id: myParticipantData?.id || "" };
          }),
      }),
    )
    .transform(data =>
      data.sort(
        ({ createdAt: a }, { createdAt: z }) =>
          new Date(z).getTime() - new Date(a).getTime(),
      ),
    );

export default function ChatRoomList() {
  const user = useUserSession();
  const router = useRouter();
  const { chatRooms, reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();

  if (!chatRooms || !user?.nickname) return null;

  const chatRoomList = ChatRoomSchema(user.id).parse(chatRooms);

  const exitRoom = async (
    e: FormEvent<HTMLFormElement>,
    deleteKey: string,
    deleteApi: string,
  ) => {
    e.preventDefault();
    await fetchPost<string>(`/api/${deleteApi}`, {
      body: JSON.stringify(deleteKey),
    });
    router.push("/chat");
    reloadChatRooms();
  };

  return (
    <>
      <section className="container">
        <h2 className="section-title text-acccent"></h2>
        <p className="prose"></p>
      </section>

      {chatRoomList.map(
        ({
          id: chatRoomId,
          chatParticipant: { id: myParticipantId, user: targetUser },
        }) => {
          return (
            <div key={chatRoomId} className="my-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Image
                  className="aspect-1 rounded-full"
                  width={40}
                  height={40}
                  src={targetUser?.image || "/images/pingu.webp"}
                  alt="프로필 사진"
                />
                <Link
                  href={`/chat/${chatRoomId}?${createQueryString(
                    "authorId",
                    targetUser?.id || "deletedAccount",
                  )}`}
                >
                  {targetUser?.nickname || "empty room"}
                </Link>
              </div>
              <form
                onSubmit={e => {
                  targetUser?.id
                    ? exitRoom(e, myParticipantId, "deleteExistChatRoom")
                    : exitRoom(e, chatRoomId, "deleteEmptyChatRoom");
                }}
              >
                <button>x</button>
              </form>
            </div>
          );
        },
      )}
    </>
  );
}
