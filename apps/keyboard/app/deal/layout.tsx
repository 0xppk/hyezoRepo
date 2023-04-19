import { ItemProviders } from "~/lib/contexts";
import { requireSignIn } from "~/lib/session";
import { fetcher } from "~/lib/utils";

export default async function DealLayout({ children }: LayoutProps) {
  await requireSignIn();

  const allItems = await fetcher<TAllItems[]>("/api/getAllPost", {
    next: {
      revalidate: 10,
    },
  });

  return (
    <ItemProviders value={allItems}>
      <div className="col-span-3 select-none p-5 sm:p-7">{children}</div>
    </ItemProviders>
  );
}
