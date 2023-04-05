import { OpeningWindow, MainPageGrid } from "~/components/client";
import { getCurrentUser } from "~/lib/session";
import { fetcher } from "~/lib/utils";
import { AllBrandData } from "~/types/prisma";

export default async function Page() {
  const user = await getCurrentUser();
  const brands = await fetcher<AllBrandData>("/api/getAllBrand");

  return <>{!user?.nickname ? <OpeningWindow /> : <MainPageGrid brands={brands} />}</>;
}
