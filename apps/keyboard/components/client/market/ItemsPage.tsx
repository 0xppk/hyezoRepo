import { useState } from "react";
import { SearchItemInput, ItemsGridCard } from "~/components/client";
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
