import { Session } from "next-auth";
import { UserInfo } from "~/components/server";
import NavLink from "./NavLink";

type NavBarProps = {
  session: Session | null;
};

export default function NavBar({ session }: NavBarProps) {
  return (
    <>
      <UserInfo user={session?.user} />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/deal/buy">삽니다</NavLink>
      <NavLink href="/deal/sell">팝니다</NavLink>
      <NavLink href="/chat">메시지</NavLink>
    </>
  );
}
