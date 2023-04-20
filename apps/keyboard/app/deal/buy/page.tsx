import { ItemsPage } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

export default async function BuyingItem() {
  const allItems = await fetcher<TItems[]>("/api/getAllPost", {
    cache: "no-cache",
  });
  const allBuyingItems = allItems.filter(item => item.category === "BUY");

  return <ItemsPage allItems={allBuyingItems} />;
}
