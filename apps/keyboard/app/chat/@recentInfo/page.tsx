import { ChatRecentInfo } from "~/components/client";
import { requireSignIn } from "~/lib/session";

export default async function RecentInfoSection() {
  await requireSignIn();

  return (
    <div className="min-w-full lg:col-span-2 lg:h-[30vh] lg:border-r lg:border-t lg:border-gray-900">
      <ChatRecentInfo />
    </div>
  );
}
