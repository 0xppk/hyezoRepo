import { requireSignIn } from "~/lib/session";

export default async function ChatLayout({ children }: LayoutProps) {
  await requireSignIn();

  return <>{children}</>;
}
