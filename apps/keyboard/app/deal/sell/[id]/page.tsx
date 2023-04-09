import { type Metadata } from "next";

async function getProduct(id: string) {
  const res = await fetch(`/api/products/${id}`);
  return res.json();
}

export async function generateMetadata({
  params,
}: PageProps<{ id: string }>): Promise<Metadata> {
  const product = await getProduct(params.id);
  return { title: "키보드명", description: "키보드 브랜드" };
}

export default function DetailedItemPage({ params }: PageProps<{ id: string }>) {
  return <>/* Code here */</>;
}