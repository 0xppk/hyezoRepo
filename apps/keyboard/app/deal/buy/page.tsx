"use client";

import { ItemsGridCard } from "~/components/client";
import { useLoadAllPosts } from "~/hooks";

export default function BuyingItem() {
  const { allPostsData: allBuyingItems } = useLoadAllPosts({ category: "BUY" });

  return <ItemsGridCard data={allBuyingItems} />;
}
