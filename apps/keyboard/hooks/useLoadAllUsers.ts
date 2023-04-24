import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { type TUser } from "~/types/prisma";
import { useUserSession } from "~/hooks";

export default function useLoadAllUsers() {
  const user = useUserSession();
  if (!user) return;

  const {
    data: allUsers,
    isLoading,
    error,
    mutate: reloadAllUsers,
  } = useSWR("/api/getAllUsers", fetcher<TUser[]>);

  return { allUsers, isLoading, error, reloadAllUsers };
}
