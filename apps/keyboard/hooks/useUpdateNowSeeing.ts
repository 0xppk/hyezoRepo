import { useCallback, useEffect } from "react";
import { useEventListener } from "@hyezo/hooks";
import { fetchPost } from "~/lib/utils";

export default function useUpdateNowSeeing(chatRoomId: string) {
  const updateNowSeeing = useCallback(
    async (status: boolean) =>
      await fetchPost("/api/updateNowSeeing", {
        body: JSON.stringify({ nowSeeing: status, chatRoomId }),
      }),
    [chatRoomId],
  );

  const setNowSeeing = async () => await updateNowSeeing(true);
  const clearNowSeeing = async () => await updateNowSeeing(false);

  useEffect(() => {
    setNowSeeing();

    return () => {
      clearNowSeeing();
    };
  }, [chatRoomId, updateNowSeeing]);

  // 페이지 이동하지 않고(= 언마운트x) 브라우저 종료할 경우
  useEventListener("beforeunload", () => {
    clearNowSeeing();
  });
}
