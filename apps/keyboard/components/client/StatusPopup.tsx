import { Dispatch, MouseEvent, SetStateAction, useCallback, useRef } from "react";
import { Button } from "@hyezo/ui";
import { fetchPost, fetcher } from "~/lib/utils";
import { useClickOutside } from "@hyezo/hooks";
import { env } from "~/env.mjs";

type StatusType = "ING" | "PENDING" | "END";
type StatusPopupProps = {
  presentStatus: StatusType;
  postId: string;
  setStatusPopup: Dispatch<SetStateAction<boolean[]>>;
  idx: number;
};

const statusType = ["ING", "PENDING", "END"] as const;

export default function StatusPopup({
  presentStatus,
  postId,
  setStatusPopup,
  idx,
}: StatusPopupProps) {
  const cancelRef = useRef<HTMLDivElement>(null);

  const closePopup = useCallback(() => {
    setStatusPopup(prev => {
      const copy = [...prev];
      copy[idx] = false;
      return copy;
    });
  }, [idx, setStatusPopup]);

  const updateStatus = useCallback(
    async (
      e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
      status: StatusType,
    ) => {
      e.preventDefault();
      await fetchPost<StatusType>("/api/updateStatus", {
        body: JSON.stringify({ status, postId }),
      });
      await fetcher(`/api/revalidate?secret=${env.NEXT_PUBLIC_HYEZO_SECRET}`);
      closePopup();
    },
    [postId, closePopup],
  );

  useClickOutside(cancelRef, () => closePopup());
  const filteredStatus = statusType.filter(status => status !== presentStatus);

  return (
    <div className="rounded-inherit absolute z-20 grid h-full w-full place-items-center bg-black/90">
      <div className="flex gap-5" ref={cancelRef}>
        {filteredStatus.map(status => (
          <Button
            key={status}
            outline
            onClick={e => updateStatus(e, status)}
            color={`${
              status === "PENDING" ? "orange" : status === "END" ? "red" : "twitter"
            }`}
          >
            {status === "PENDING"
              ? "거래중"
              : status === "END"
              ? "거래완료"
              : "판매중"}
          </Button>
        ))}
      </div>
    </div>
  );
}
