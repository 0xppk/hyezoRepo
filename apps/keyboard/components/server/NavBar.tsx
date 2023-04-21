import { ComponentProps } from "react";
import { UserInfo } from "~/components/client";
import { Logo, NavLink } from "~/components/server";
import LogoImage from "~/public/images/logo.png";

type NavBarProps = ComponentProps<"nav">;

export default function NavBar({ ...props }: NavBarProps) {
  return (
    <nav {...props}>
      <div className="flex basis-1/6 pl-3 sm:pl-7 lg:basis-1/3">
        <Logo
          src={LogoImage}
          alt="로고"
          href="/"
          className="interactable z-20 h-10 w-10 sm:h-12 sm:w-12"
          data-type="link"
        />
      </div>
      <div className="flex h-full basis-1/2 items-center justify-around border-x border-x-gray-900 px-3 sm:px-5 md:px-10 lg:basis-1/3">
        <NavLink variant="xs/normal" className="interactable" href="/buy">
          Buy
        </NavLink>
        <NavLink variant="xs/normal" className="interactable" href="/sell">
          Sell
        </NavLink>
        <NavLink variant="xs/normal" className="interactable" href="/chat">
          Chat
        </NavLink>
      </div>
      <div className="flex grow justify-around">
        <UserInfo />
      </div>
    </nav>
  );
}
