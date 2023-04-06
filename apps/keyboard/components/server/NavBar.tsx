"use client";

import { cn } from "@hyezo/utils";
import { ComponentProps } from "react";
import { UserInfo, SignOutBtn } from "~/components/client";
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
      <div className="sm:flex sm:basis-1/3 sm:pl-7">
        <Logo
          src={LogoImage}
          alt="로고"
          href="/"
          className="interactable h-10 w-10 sm:h-12 sm:w-12"
          data-type="link"
        />
      </div>
      <div className="contents sm:hidden">
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
        <SignOutBtn>
          <Icons.logout />
        </SignOutBtn>
      </div>
      <div className="hidden sm:flex sm:h-full sm:basis-1/3 sm:items-center sm:justify-around sm:border-x sm:border-x-gray-900 sm:px-16">
        <NavLink variant="xs/normal" href="/deal/buy">
          Buy
        </NavLink>
        <NavLink variant="xs/normal" href="/deal/sell">
          Sell
        </NavLink>
        <NavLink variant="xs/normal" href="/chat">
          Chat
        </NavLink>
      </div>
      <div className="contents sm:flex sm:grow sm:justify-around">
        <UserInfo />
      </div>
    </nav>
  );
}
