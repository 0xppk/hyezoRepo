import { useState } from "react";
import { ItemsGridCard, SearchItemInput } from "~/components/client";
import { type TItems } from "~/types/prisma";

type ItemsPageProps = {
  allItems: TItems[];
};

export default function ItemsPage({ allItems }: ItemsPageProps) {
  const [searchedItems, setSearchedItems] = useState<TItems[]>(allItems);

  return (
    <>
      <SearchItemInput allItems={allItems} setSearchedItems={setSearchedItems} />
      <ItemsGridCard allItems={searchedItems} setSearchedItems={setSearchedItems} />
    </>
  );
}
