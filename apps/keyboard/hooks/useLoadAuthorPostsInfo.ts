import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import useUserSession from "./useUserSession";

export default function useLoadAuthorPostsInfo(authorId: string | null | undefined) {
  const user = useUserSession();
  const {
    data: authorPost,
    mutate: reloadAuthorPost,
    error,
    isLoading,
  } = useSWR(
    `/api/getAuthorsPosts?authorId=${authorId || user?.id}`,
    fetcher<AuthorsPost>,
  );

  return { authorPost, reloadAuthorPost, error, isLoading };
}
