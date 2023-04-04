"use client";

import { ItemsGridCard } from "~/components/client";
import { useLoadAllPosts } from "~/hooks";

export default function SellingItem() {
  const { allPostsData: allSellingItems } = useLoadAllPosts({ category: "SELL" });

  return <ItemsGridCard data={allSellingItems || []} />;
}
