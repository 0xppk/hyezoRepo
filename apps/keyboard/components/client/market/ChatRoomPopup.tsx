import { useClickOutside } from "@hyezo/hooks";
import { Button } from "@hyezo/ui";
import { useRouter } from "next/navigation";
import { useCallback, useRef } from "react";
import { useLoadChatRooms, useQueryString } from "~/hooks";
import { fetchPost } from "~/lib/utils";

type StatusPopupProps = {
  authorId: string;
  closeCardOverlay: (idx: number) => void;
  idx: number;
};

export default function ChatRoomPopup({
  authorId,
  closeCardOverlay,
  idx,
}: StatusPopupProps) {
  const cancelRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();

  useClickOutside(cancelRef, () => closeCardOverlay(idx));

  const openChatRoom = useCallback(
    async (authorId: string) => {
      const { chatRoomId } = await fetchPost<{ chatRoomId: string }>(
        "/api/createChatRoom",
        {
          body: JSON.stringify(authorId),
        },
      );
      reloadChatRooms();
      router.push(`/chat/${chatRoomId}?${createQueryString("authorId", authorId)}`);
    },
    [reloadChatRooms, createQueryString, router],
  );

  return (
    <div className="rounded-inherit absolute z-20 grid h-full w-full place-items-center bg-black/90">
      <div className="flex gap-5" ref={cancelRef}>
        <Button outline onClick={() => openChatRoom(authorId)} color="black">
          채팅
        </Button>
      </div>
    </div>
  );
}
