"use client";

import { useContext, useState } from "react";
import { ItemsGridCard, SearchItemInput } from "~/components/client";
import { ItemContext } from "~/lib/contexts";

export default function SellingItem() {
  const allItems = useContext(ItemContext);
  const allSellingItems = allItems.filter(item => item.category === "SELL");
  const [searchedItems, setSearchedItems] = useState<TAllItems[]>();

  return (
    <>
      <SearchItemInput
        allPostsData={allSellingItems}
        setSearchedItems={setSearchedItems}
      />
      <ItemsGridCard data={searchedItems || allSellingItems || []} />
    </>
  );
}
