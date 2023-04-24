import { Icons, NavLink } from "~/components/server";
import { Text } from "@hyezo/ui";

export default function ProfileNav() {
  return (
    <div className="hidden lg:col-span-1 lg:flex lg:h-[90vh] lg:flex-col lg:items-center lg:gap-4 lg:pt-10">
      <Text variant="xl/bold" className="mb-5">
        User Profile
      </Text>
      <div className="flex min-w-max flex-col gap-5">
        <NavLink href="/user-info">
          <Icons.user />
          User Info
        </NavLink>
        <NavLink href="/watchlist">
          <Icons.watch />
          Watchlist
        </NavLink>
        <NavLink href="/favorite">
          <Icons.like />
          Favorites
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
    </div>
  );
}
