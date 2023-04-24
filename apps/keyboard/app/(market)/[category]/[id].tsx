import { type Metadata } from "next";
import { fetcher } from "~/lib/utils";
import { TItems } from "~/types/prisma";

type DetailPageParams = {
  category: string;
  id: string;
};

export async function generateMetadata({
  params: { category, id },
}: PageProps<DetailPageParams>): Promise<Metadata> {
  return { title: "키보드명", description: "키보드 브랜드" };
}

export async function generateStaticParams() {
  const items = await fetcher<TItems[]>("/api/getAllPost");
  return items.map(item => ({
    category: item.category.toLowerCase(),
    id: item.id,
  }));
}

export default function DetailedItemPage({
  params: { category, id },
}: PageProps<DetailPageParams>) {
  return <div>임시</div>;
}
