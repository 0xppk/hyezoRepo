import { useState } from "react";
import { ItemsGridCard, ItemSearchInput } from "~/components/client";
import { type TItems } from "~/types/prisma";

type ItemsPageProps = {
  allItems: TItems[];
};

export default function ItemsPage({ allItems }: ItemsPageProps) {
  const [searchedItems, setSearchedItems] = useState<TItems[]>(allItems);

  return (
    <>
      <ItemSearchInput allItems={allItems} setSearchedItems={setSearchedItems} />
      <ItemsGridCard allItems={searchedItems} setSearchedItems={setSearchedItems} />
    </>
  );
}
