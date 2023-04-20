import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { type TChatRoom } from "~/types/prisma";

export default function useLoadChatRooms() {
  const {
    data: chatRooms,
    mutate: reloadChatRooms,
    error,
    isLoading,
  } = useSWR("/api/getChatRoomList", fetcher<TChatRoom[]>);

  return { chatRooms, reloadChatRooms, error, isLoading };
}
