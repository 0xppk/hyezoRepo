import { MainPageGrid } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { type TBrand } from "~/types/prisma";

export default async function Page() {
  const brands = await fetcher<TBrand[]>("/api/getAllBrand");

  return <MainPageGrid brands={brands} />;
}
