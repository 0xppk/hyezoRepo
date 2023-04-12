"use client";

import { useState } from "react";
import { ItemsGridCard, SearchItems } from "~/components/client";
import { useLoadAllPosts } from "~/hooks";

export default function SellingItem() {
  const { allPostsData: allSellingItems } = useLoadAllPosts({ category: "SELL" });
  const [searchedItems, setSearchedItems] = useState<AllSellingData>();

  return (
    <>
      <SearchItems setSearchedItems={setSearchedItems} />
      <ItemsGridCard data={searchedItems || allSellingItems || []} />
    </>
  );
}
