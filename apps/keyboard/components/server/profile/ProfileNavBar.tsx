import { Icons, NavLink } from "~/components/server";

export default function ProfileNav() {
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
