import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { type TChatRoom } from "~/types/prisma";
import { useUserSession } from "~/hooks";

export default function useLoadChatRooms() {
  const user = useUserSession();
  if (!user) return;

  const {
    data: chatRooms,
    mutate: reloadChatRooms,
    error,
    isLoading,
  } = useSWR("/api/getChatRoomList", fetcher<TChatRoom[]>);

  return { chatRooms, reloadChatRooms, error, isLoading };
}
