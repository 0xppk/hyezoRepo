import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useContext } from "react";
import { z } from "zod";
import {
  useLoadAuthorId,
  useLoadChatRooms,
  useQueryString,
  useUserSession,
} from "~/hooks";
import { TabContext } from "~/lib/contexts";
import { fetchPost } from "~/lib/utils";
import { Icons } from "~/components/server";

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
                  nickname: z.string().nullable(),
                  image: z.string().nullish(),
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
  const { authorId } = useLoadAuthorId();
  const { setTab } = useContext(TabContext);

  if (!chatRooms || !user?.nickname) return <></>;

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
    await reloadChatRooms();
    router.push("/chat");
  };

  return (
    <div className="mt-10 flex flex-col gap-7">
      {chatRoomList.map(
        ({
          id: chatRoomId,
          chatParticipant: { id: myParticipantId, user: targetUser },
        }) => {
          return (
            <div
              key={chatRoomId}
              className="relative flex items-center justify-between px-3"
            >
              {targetUser?.id === authorId && (
                <div className="blue-dot absolute -left-4 animate-pulse" />
              )}
              <div className="flex items-center gap-3" onClick={() => setTab("chat")}>
                <Image
                  className="aspect-1 rounded-full"
                  width={44}
                  height={44}
                  src={targetUser?.image || "/images/pingu.png"}
                  alt="프로필 사진"
                />
                <Link
                  href={`/chat/${chatRoomId}?${createQueryString(
                    "authorId",
                    targetUser?.id || "deletedAccount",
                  )}`}
                >
                  <span
                    className={`${
                      targetUser?.id === authorId && "text-glow text-twitter-200"
                    }`}
                  >
                    {targetUser?.nickname || "empty room"}
                  </span>
                </Link>
              </div>
              <form
                onSubmit={e => {
                  targetUser?.id
                    ? exitRoom(e, myParticipantId, "deleteExistChatRoom")
                    : exitRoom(e, chatRoomId, "deleteEmptyChatRoom");
                }}
              >
                <button className="hover:text-90 grid place-items-center p-2 text-white/60">
                  <Icons.exit className="hover:animate-wiggle h-5 w-5 duration-300" />
                </button>
              </form>
            </div>
          );
        },
      )}
    </div>
  );
}
