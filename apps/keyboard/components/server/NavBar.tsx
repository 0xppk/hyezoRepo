"use client";

import { UserInfo } from "~/components/server";
import { useUserSession } from "~/hooks";
import NavLink from "./NavLink";

export default function NavBar() {
  const user = useUserSession();

  return (
    <nav
      className={`flex min-w-max flex-col gap-2 duration-1000 ${
        user?.nickname ? "opacity-100" : "opacity-0"
      }`}
    >
      <UserInfo />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/deal/buy">삽니다</NavLink>
      <NavLink href="/deal/sell">팝니다</NavLink>
      <NavLink href="/chat">메시지</NavLink>
    </nav>
  );
}
