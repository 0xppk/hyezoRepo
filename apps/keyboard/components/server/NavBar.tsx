"use client";

import { cn } from "@hyezo/utils";
import { ComponentProps } from "react";
import { UserInfo } from "~/components/client";
import { Icons, Logo } from "~/components/server";
import { useUserSession } from "~/hooks";
import LogoImage from "~/public/images/logo.png";
import NavLink from "./NavLink";

type NavBarProps = ComponentProps<"nav">;

export default function NavBar({ className, ...props }: NavBarProps) {
  const user = useUserSession();

  return (
    <nav
      className={cn(`${className} ${user?.nickname ? "opacity-100" : "opacity-0"}`)}
      {...props}
    >
      <Logo src={LogoImage} alt="로고" href="/" className="h-10 w-10 sm:h-12 sm:w-12" />
      <NavLink href="/">
        <Icons.home />
      </NavLink>
      <NavLink href="/deal/buy">
        <Icons.buy />
      </NavLink>
      <NavLink href="/deal/sell">
        <Icons.sell />
      </NavLink>
      <NavLink href="/chat">
        <Icons.chat />
      </NavLink>
      <UserInfo />
    </nav>
  );
}
