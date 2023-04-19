import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { SplitWord } from "~/components/server";
import { StatusPopup } from "~/components/client";
import { useLoadChatRooms, useQueryString, useUserSession } from "~/hooks";
import { createTitle, fetchPost } from "~/lib/utils";

type GridCardProps = {
  data?: TAllItems[];
};

const handleOnMouseMove = (e: PointerEvent) => {
  const { currentTarget: target } = e;
  if (target instanceof HTMLDivElement) {
    const rect = target.getBoundingClientRect(),
      y = e.clientY - rect.top,
      x = e.clientX - rect.left;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
};

export default function GridCard({ data }: GridCardProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const { reloadChatRooms } = useLoadChatRooms();
  const { createQueryString } = useQueryString();
  const user = useUserSession();
  const [statusPopup, setStatusPopup] = useState<boolean[]>([false]);

  useEffect(() => {
    if (!gridRef.current?.children) return;

    for (const card of gridRef.current.children)
      if (card instanceof HTMLDivElement)
        card.onpointermove = e => {
          handleOnMouseMove(e);
        };
  }, [gridRef, data]);

  useEffect(() => {
    if (!data) return;
    setStatusPopup(Array.from({ length: data.length }, () => false));
  }, [data]);

  const openChatRoom = useCallback(
    async (authorId: string, idx: number) => {
      if (authorId === user?.id) {
        setStatusPopup(prev => {
          const copy = [...prev];
          copy[idx] = true;
          return copy;
        });
        return;
      }
      const newChatRoomId = await fetchPost<string>("/api/createChatRoom", {
        body: JSON.stringify(authorId),
      });
      reloadChatRooms();
      router.push(
        `/chat/${newChatRoomId}?${createQueryString("authorId", authorId)}`,
      );
    },
    [reloadChatRooms, user, createQueryString, router],
  );

  return (
    <div className="gridcards text-white" ref={gridRef}>
      {data?.map((card, i) => (
        <div className="gridcard" key={card.id}>
          {statusPopup[i] && (
            <StatusPopup
              presentStatus={card.status}
              postId={card.id}
              setStatusPopup={setStatusPopup}
              idx={i}
            />
          )}
          <div
            onClick={() => openChatRoom(card.author.id, i)}
            className="absolute right-0 top-0 z-10 m-3 flex cursor-pointer flex-col items-center"
          >
            <Image
              width={33}
              height={33}
              src={card.author.image || "/images/defaultImage.png"}
              alt="프사"
              className="splitword_author rounded-full pb-1"
            />
            <p>{createTitle(SplitWord.Aurhor, card.author.nickname)}</p>
          </div>
          <div className="gridcard_content flex items-end justify-between">
            <div className="flex flex-col pb-2 pl-3">
              <div className="flex items-center gap-3 pb-2">
                <p
                  className={`px-2  py-px uppercase text-black ${
                    card.brandName === "gmk" ? "bg-orange-400" : "bg-white"
                  }`}
                >
                  {card.brandName}
                </p>
                <p>{card.layout}</p>
                <p>{card.color}</p>
              </div>
              <p className="font-point line-clamp-1 text-2xl font-bold">
                {createTitle(SplitWord.Title, card.title)}
              </p>
            </div>
            <div className="flex flex-col items-center pb-2 pr-1 lg:pr-3">
              <p className="text-2xl font-bold">
                {createTitle(SplitWord.Price, String(card.price))}
              </p>
              <div
                className={`px-5 italic ${
                  card.status === "ING"
                    ? "text-emerald-700"
                    : card.status === "END"
                    ? "text-red-900"
                    : "text-orange-600"
                }`}
              >
                {card.status}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
