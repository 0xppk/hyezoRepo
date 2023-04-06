import { ItemsGridCard } from "~/components/client";
import { useLoadAllPosts } from "~/hooks";
import { fetcher } from "~/lib/utils";
import { AllSellingData } from "~/types/prisma";

export default async function SellingItem() {
  // const { allPostsData: allSellingItems } = useLoadAllPosts({ category: "SELL" });
  const allSellingItems = await fetcher<AllSellingData>("/api/getAllPost?category=SELL", {
    next: {
      revalidate: 0,
    },
  });
  
  return <ItemsGridCard data={allSellingItems || []} />;
}
