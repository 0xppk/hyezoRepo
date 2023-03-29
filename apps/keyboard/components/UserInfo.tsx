import { Session } from "next-auth";
import Image from "next/image";
import { Icons, SignOutBtn, UserSetting } from "~/components";

type UserInfoProps = {
  user?: Session["user"];
};

export default function UserInfo({ user }: UserInfoProps) {
  return (
    <div className="flex items-center gap-2">
      <Image
        src={user?.image || "/defaultImage.png"}
        height={30}
        width={30}
        alt="프로필"
        className="rounded-full"
      />
      <div>{user?.nickname}</div>
      <UserSetting />
      <SignOutBtn>
        <Icons.logout className="h-4 w-4" />
      </SignOutBtn>
    </div>
  );
}
