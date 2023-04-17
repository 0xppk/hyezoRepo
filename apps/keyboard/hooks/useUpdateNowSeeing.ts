import { useCallback, useEffect } from "react";
import { fetchPost } from "~/lib/utils";

export default function useUpdateNowSeeing(chatRoomId: string) {
  const updateNowSeeing = useCallback(
    async (status: boolean) =>
      await fetchPost<boolean>("/api/updateNowSeeing", {
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
  }, [chatRoomId]);
}
