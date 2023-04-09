import { Dispatch, MouseEvent, SetStateAction } from "react";
import { fetchPost } from "~/lib/utils";

type StatusType = "ING" | "PENDING" | "END";

type StatusPopupType = {
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
}: StatusPopupType) {
  const filteredStatus = statusType.filter(status => status !== presentStatus);

  const updateStatus = (e: MouseEvent<HTMLButtonElement>, status: StatusType) => {
    e.preventDefault();
    fetchPost<StatusType>("/api/updateStatus", {
      body: JSON.stringify({ status, postId }),
    });
  };

  return (
    <div className="rounded-inherit absolute z-20 grid h-full w-full place-items-center bg-black/90">
      <div className="flex gap-5">
        {filteredStatus.map(status => (
          <button key={status} onClick={e => updateStatus(e, status)}>
            {status === "PENDING" ? "거래중" : status === "END" ? "거래완료" : "판매중"}
          </button>
        ))}
      </div>
      <div
        className="absolute bottom-12"
        onClick={() =>
          setStatusPopup(prev => {
            const copy = [...prev];
            copy[idx] = false;
            return copy;
          })
        }
      >
        취소
      </div>
    </div>
  );
}
