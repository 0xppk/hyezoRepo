import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import useLoadAuthorId from "./useLoadAuthorId";

export default function useCheckNowSeeing(chatRoomId: string) {
  const { authorId } = useLoadAuthorId();
  const {
    data: nowSeeing,
    mutate: reloadNowSeeing,
    error,
    isLoading,
  } = useSWR(
    `/api/getNowSeeing?chatRoomId=${chatRoomId}&authorId=${authorId}`,
    fetcher<boolean>,
  );

  return { nowSeeing, reloadNowSeeing, error, isLoading, authorId };
}
