import { Metadata } from "next";
import { ItemsPage } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

export const metadata: Metadata = {
  title: "구매",
  description: "a page for buying custom keyboard and keycaps",
};

export default async function BuyingItem() {
  const allItems = await fetcher<TItems[]>("/api/getAllPost", {
    cache: "no-cache",
  });
  const allBuyingItems = allItems.filter(item => item.category === "BUY");

  return <ItemsPage allItems={allBuyingItems} />;
}
