import { MainPageGrid, MouseTrailer } from "~/components/client";
import { fetcher } from "~/lib/utils";

export default async function Page() {
  const brands = await fetcher<AllBrandData>("/api/getAllBrand");

  return (
    <>
      <MouseTrailer />
      <MainPageGrid brands={brands} />
    </>
  );
}
