import { ItemsPage } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

export default async function SellingItem() {
  const allItems = await fetcher<TItems[]>("/api/getAllPost", {
    cache: "no-cache",
  });
  const allSellingItems = allItems.filter(item => item.category === "SELL");

  return <ItemsPage allItems={allSellingItems} />;
}
