import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { ChatRooms } from "~/types/db";

export default function useLoadChatRooms() {
  const {
    data: chatRooms,
    mutate: reloadChatRooms,
    error,
    isLoading,
  } = useSWR("/api/getChatRoomList", fetcher<ChatRooms>);

  return { chatRooms, reloadChatRooms, error, isLoading };
}
