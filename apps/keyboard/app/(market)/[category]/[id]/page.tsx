import { type Metadata } from "next";

type DetailPageParams = {
  category: string;
  id: string;
};

export async function generateMetadata({
  params: { category, id },
}: PageProps<DetailPageParams>): Promise<Metadata> {
  return { title: "키보드명", description: "키보드 브랜드" };
}

export default function DetailedItemPage({
  params: { category, id },
}: PageProps<DetailPageParams>) {
  return <div>임시</div>;
}
