import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { Message } from "~/types/db";

export default function useLoadMessages(chatRoomId: string) {
  const {
    data: messages,
    isLoading,
    error,
    mutate: reloadMessages,
  } = useSWR(`/api/getMessages/${chatRoomId}`, fetcher<Message[]>);

  return { messages, isLoading, error, reloadMessages };
}
