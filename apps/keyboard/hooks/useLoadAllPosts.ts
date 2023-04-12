import useSWR from "swr";
import { fetcher } from "~/lib/utils";

type useLoadAllPostsProps = {
  category: "SELL" | "BUY";
};

export default function useLoadAllPosts({ category }: useLoadAllPostsProps) {
  const {
    data: allPostsData,
    isLoading,
    error,
    mutate: reloadAllPosts,
  } = useSWR(`/api/getAllPost?category=${category}`, fetcher<AllSellingData>);

  return { allPostsData, isLoading, error, reloadAllPosts };
}
