import useSWR from "swr";
import { fetcher } from "~/lib/utils";

export default function useLoadMessages() {
  const {
    data: messages,
    isLoading,
    error,
    mutate,
  } = useSWR("/api/getMessages", fetcher<Message[]>);

  return { messages, isLoading, error, mutate };
}
