import { Metadata } from "next";
import { ItemsPage } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { type TItems } from "~/types/prisma";

type ItemPageParams = {
  category: string;
};

export function generateMetadata({
  params: { category },
}: PageProps<ItemPageParams>): Metadata {
  return {
    title: `${category === "sell" ? "Sell" : "Buy"}`,
    description: `${
      category === "sell"
        ? "a page for selling custom keyboard and keycaps"
        : "a page for buying custom keyboard and keycaps"
    }`,
  };
}

export async function generateStaticParams() {
  const allItems = await fetcher<TItems[]>("/api/getAllPost");

  return allItems.map(item => ({
    category: item.category.toLowerCase(),
  }));
}

export default async function ItemPage({
  params: { category },
}: PageProps<ItemPageParams>) {
  const allItems = await fetcher<TItems[]>("/api/getAllPost", {
    next: { revalidate: 60 },
  });

  const filteredItems = allItems.filter(item => item.category === category.toUpperCase());

  return <ItemsPage allItems={filteredItems} />;
}
