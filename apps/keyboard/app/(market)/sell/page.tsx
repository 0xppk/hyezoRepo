import { Metadata } from "next";
import { ItemsPage } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

export const metadata: Metadata = {
  title: "판매",
  description: "a page for selling custom keyboard and keycaps",
};

export default async function SellingItem() {
  const allItems = await fetcher<TItems[]>("/api/getAllPost", {
    cache: "no-cache",
  });
  const allSellingItems = allItems.filter(item => item.category === "SELL");

  return <ItemsPage allItems={allSellingItems} />;
}
