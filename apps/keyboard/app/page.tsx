import { MainPageGrid } from "~/components/client";
import { fetcher } from "~/lib/utils";
import { AllBrandData } from "~/types/prisma";

export default async function Page() {
  const brands = await fetcher<AllBrandData>("/api/getAllBrand");

  return <MainPageGrid brands={brands} />
}
