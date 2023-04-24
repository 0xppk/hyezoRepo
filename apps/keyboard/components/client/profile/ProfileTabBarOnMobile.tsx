import { useRouter } from "next/navigation";
import { Icons } from "~/components/server";

export default function ProfileTabBarOnMobile() {
  const router = useRouter();
  return (
    <div className="flex h-[10vh] w-min items-center justify-around gap-10 place-self-center rounded-lg py-6 lg:hidden">
      <Icons.user className="h-5 w-5" onClick={() => router.push("user-info")} />
      <Icons.watch className="h-5 w-5" onClick={() => router.push("watchlist")} />
      <Icons.like className="h-5 w-5" onClick={() => router.push("favorite")} />
      <Icons.setting className="h-5 w-5" onClick={() => router.push("user-setting")} />
      <Icons.notificationOn
        className="h-5 w-5"
        onClick={() => router.push("notification")}
      />
    </div>
  );
}
