import { Text } from "@hyezo/ui";
import { Metadata } from "next";
import { NavLink, Icons } from "~/components/server";
import { requireSignIn } from "~/lib/session";

export const metadata: Metadata = {
  title: "프로필",
  description: "a page for editing user configs",
};

export default async function ProfileLayout({ children }: LayoutProps) {
  await requireSignIn();

  return (
    <>
      <div className="col-span-1 flex h-[90vh] flex-col items-center gap-4 border-r border-gray-900 pt-10">
        <Text variant="xl/bold" className="mb-5">
          User Profile
        </Text>
        <ProfileNav />
      </div>
      <div className="col-span-2 p-20">{children}</div>
    </>
  );
}

function ProfileNav() {
  return (
    <div className="flex min-w-max flex-col gap-5">
      <NavLink href="/user-info">
        <Icons.user />
        User Info
      </NavLink>
      <NavLink href="/favorite">
        <Icons.like />
        Favorites
      </NavLink>
      <NavLink href="/watchlist">
        <Icons.watch />
        Watchlist
      </NavLink>
      <NavLink href="/user-setting">
        <Icons.setting />
        Setting
      </NavLink>
      <NavLink href="/notification">
        <Icons.notificationOn />
        Notification
      </NavLink>
    </div>
  );
}
