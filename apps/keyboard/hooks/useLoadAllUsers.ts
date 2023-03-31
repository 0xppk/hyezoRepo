import { Session } from "next-auth";
import useSWR from "swr";
import { fetcher } from "~/lib/utils";

export default function useLoadAllUsers() {
  const {
    data: allUsers,
    isLoading,
    error,
    mutate: reloadAllUsers,
  } = useSWR("/api/getAllUsers", fetcher<Session["user"][]>);

  return { allUsers, isLoading, error, reloadAllUsers };
}
