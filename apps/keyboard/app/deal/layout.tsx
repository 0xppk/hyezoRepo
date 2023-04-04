import { requireSignIn } from "~/lib/session";

export default async function DealLayout({ children }: LayoutProps) {
  await requireSignIn();

  return <div className="col-span-3 p-5 sm:p-7">{children}</div>;
}
