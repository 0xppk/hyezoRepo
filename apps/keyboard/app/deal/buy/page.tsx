"use client";

import { useContext, useState } from "react";
import { ItemsGridCard, SearchItemInput } from "~/components/client";
import { ItemContext } from "~/lib/contexts";

export default function BuyingItem() {
  const allItems = useContext(ItemContext);
  const allBuyingItems = allItems.filter(item => item.category === "BUY");
  const [searchedItems, setSearchedItems] = useState<TAllItems[]>();

  return (
    <>
      <SearchItemInput
        allPostsData={allBuyingItems}
        setSearchedItems={setSearchedItems}
      />
      <ItemsGridCard data={searchedItems || allBuyingItems || []} />
    </>
  );
}
