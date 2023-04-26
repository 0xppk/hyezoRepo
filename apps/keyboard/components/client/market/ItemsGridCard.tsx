import { useISOLoop } from "@hyezo/hooks";
import { Text } from "@hyezo/ui";
import Image from "next/image";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { ChatRoomPopup, PostStatusPopup } from "~/components/client";
import { SplitWord } from "~/components/server";
import { useCardMouseEffect, useUserSession } from "~/hooks";
import { createTitle } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

type GridCardProps = {
  allItems: TItems[];
  setSearchedItems: Dispatch<SetStateAction<TItems[]>>;
};

export default function GridCard({ allItems, setSearchedItems }: GridCardProps) {
  const gridRef = useRef<HTMLDivElement>(null);
  const user = useUserSession();
  const [statusPopup, setStatusPopup] = useState<boolean[]>([false]);
  const [handleRef, isVisible] = useISOLoop({
    threshold: 0.1,
    freezeAfterVisible: true,
  });

  useCardMouseEffect(gridRef);
  useEffect(() => {
    if (!allItems) return;
    setStatusPopup(Array.from({ length: allItems.length }, () => false));
  }, [allItems]);

  const toggleCardOverlay = useCallback(
    (idx: number) => {
      setStatusPopup(prev => {
        const copy = [...prev];
        copy[idx] = !copy[idx];
        return copy;
      });
    },
    [setStatusPopup],
  );

  return (
    <>
      {!allItems[0] ? (
        <Text variant="lg/light" className="font-point mt-28 grid place-items-center">
          Nothing Found
        </Text>
      ) : (
        <div
          className="gridcards sm:grid-cols-keyboard-layout pb-8 text-white"
          ref={gridRef}
        >
          {allItems.map((card, i) => (
            <div
              className={`gridcard h-56 snap-center duration-500 sm:h-64 ${
                isVisible[i]
                  ? "translate-y-0 skew-x-0 skew-y-0 scale-y-100 opacity-100"
                  : "translate-y-24 -skew-x-6 skew-y-6 scale-y-50 opacity-0"
              }
            `}
              key={card.id}
              ref={handleRef}
            >
              {statusPopup[i] &&
                (card.author.id === user?.id ? (
                  <PostStatusPopup
                    postId={card.id}
                    presentStatus={card.status}
                    closeCardOverlay={toggleCardOverlay}
                    setSearchedItems={setSearchedItems}
                    idx={i}
                  />
                ) : (
                  <ChatRoomPopup
                    authorId={card.authorId}
                    closeCardOverlay={toggleCardOverlay}
                    idx={i}
                  />
                ))}
              <div
                className="interactable absolute right-0 top-0 z-10 m-3 flex cursor-pointer flex-col items-center"
                onClick={() => toggleCardOverlay(i)}
                data-type="circle"
              >
                <Image
                  width={33}
                  height={33}
                  src={card.author.image || "/images/defaultImage.png"}
                  alt="프사"
                  className="splitword_author rounded-full pb-1"
                />
                <p>{createTitle(SplitWord.Aurhor, card.author.nickname || "")}</p>
              </div>
              <div
                className={`gridcard_content flex items-end justify-between ${
                  card.status === "DONE" ? "brightness-50" : "brightness-100"
                }`}
              >
                <div className="flex flex-col pb-2 pl-3">
                  <div className="flex items-end gap-3 pb-2">
                    <span
                      className={`shrink-0 px-2 py-px uppercase text-black ${
                        card.brandName === "gmk" ? "bg-orange-400" : "bg-white"
                      }`}
                    >
                      {card.brandName}
                    </span>
                    <div className="flex gap-3">
                      <span className="word-spacing break-keep">{card.layout}</span>
                      <span>{card.color}</span>
                    </div>
                  </div>
                  <p className="font-cute line-clamp-1 text-2xl font-bold">
                    {createTitle(SplitWord.Title, card.title)}
                  </p>
                </div>
                <div className="flex shrink-0 flex-col items-center pb-2 pr-2">
                  <p className="text-2xl font-bold">
                    {createTitle(SplitWord.Price, String(card.price))}
                  </p>
                  <div
                    className={`px-5 capitalize italic ${
                      card.status === "ING"
                        ? "text-emerald-700"
                        : card.status === "DONE"
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
      )}
    </>
  );
}
