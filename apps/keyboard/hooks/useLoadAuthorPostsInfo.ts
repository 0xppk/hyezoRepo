import useSWR from "swr";
import { fetcher } from "~/lib/utils";
import { useUserSession } from "~/hooks";
import { type TAuthor } from "~/types/prisma";

export default function useLoadAuthorPostsInfo(authorId: string | null | undefined) {
  const user = useUserSession();

  const {
    data: authorPost,
    mutate: reloadAuthorPost,
    error,
    isLoading,
  } = useSWR(`/api/getAuthorsPosts?authorId=${authorId || user?.id}`, fetcher<TAuthor>);

  return { authorPost, reloadAuthorPost, error, isLoading };
}
