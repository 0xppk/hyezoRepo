import Link from "next/link";
import Image from "next/image";
import { z } from "zod";
import {
  useLoadAuthorId,
  useLoadChatRooms,
  useQueryString,
  useUserSession,
} from "~/hooks";
import { fetchPost } from "~/lib/utils";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { useRouter } from "next/navigation";
import { Icons } from "../server";

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

type TChatRoomListProps = {
  setTab: Dispatch<SetStateAction<string>>;
};

export default function ChatRoomList({ setTab }: TChatRoomListProps) {
  const user = useUserSession();
  const router = useRouter();
  const { chatRooms, reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();
  const { authorId } = useLoadAuthorId();

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
    router.push("/chat");
    reloadChatRooms();
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
              className={`flex items-center justify-between px-3 ${
                targetUser?.id === authorId &&
                "text-glow decoration-salary-600 underline decoration-wavy underline-offset-4"
              }`}
            >
              <div className="flex items-center gap-3" onClick={() => setTab("chat")}>
                <Image
                  className="aspect-1 rounded-full"
                  width={44}
                  height={44}
                  src={targetUser?.image || "/images/pingu.webp"}
                  alt="프로필 사진"
                />
                <Link
                  href={`/chat/${chatRoomId}?${createQueryString(
                    "authorId",
                    targetUser?.id || "deletedAccount",
                  )}`}
                >
                  <span>{targetUser?.nickname || "empty room"}</span>
                </Link>
              </div>
              <form
                onSubmit={e => {
                  targetUser?.id
                    ? exitRoom(e, myParticipantId, "deleteExistChatRoom")
                    : exitRoom(e, chatRoomId, "deleteEmptyChatRoom");
                }}
              >
                <button className="grid place-items-center p-2">
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
