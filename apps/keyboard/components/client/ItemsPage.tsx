"use client";

import { useState } from "react";
import ItemsGridCard from "./ItemsGridCard";
import SearchItemInput from "./SearchItemInput";
import { type TItems } from "~/types/prisma";

type ItemsPageProps = {
  allItems: TItems[];
};

export default function ItemsPage({ allItems }: ItemsPageProps) {
  const [searchedItems, setSearchedItems] = useState<TItems[]>();

  return (
    <>
      <SearchItemInput allItems={allItems} setSearchedItems={setSearchedItems} />
      <ItemsGridCard
        allItems={searchedItems || allItems || []}
        setSearchedItems={setSearchedItems}
      />
    </>
  );
}
