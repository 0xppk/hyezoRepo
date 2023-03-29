import { use } from "react";
import { UserInfo } from "~/components";
import { getCurrentUser } from "~/lib/session";
import NavLink from "./NavLink";

export default function NavBar() {
  const user = use(getCurrentUser());

  return (
    <>
      <UserInfo user={user} />
      <NavLink href="/">Home</NavLink>
      <NavLink href="/deal/buy">삽니다</NavLink>
      <NavLink href="/deal/sell">팝니다</NavLink>
      <NavLink href="/chat">메시지</NavLink>
    </>
  );
}
