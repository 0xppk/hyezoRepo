import { Text } from "@hyezo/ui";
import Image from "next/image";
import Link from "next/link";
import { Icons, SignOutBtn } from "~/components/server";
import { useUserSession } from "~/hooks";

export default function UserInfo() {
  const user = useUserSession();

  return (
    <>
      {user ? (
        <>
          <SignOutBtn>
            <Icons.logout className="h-4 w-4 font-light lg:hidden" />
            <Text variant="xs/normal" className="hidden lg:block">
              Logout
            </Text>
          </SignOutBtn>
          <div className="relative h-8 w-8 sm:h-9 sm:w-9">
            <Link href="/user-info">
              <Image
                src={user?.image || "/images/pingu.webp"}
                className="interactable aspect-1 w-auto cursor-pointer rounded-full"
                data-type="circle"
                alt="프로필"
                sizes="100%"
                priority
                fill
              />
            </Link>
          </div>
        </>
      ) : (
        <>
          <Link href="/info">
            <Text variant="xs/normal" className="interactable" data-type="circle">
              Info
            </Text>
          </Link>
          <Link href="/sign-in">
            <Text variant="xs/normal" className="interactable" data-type="circle">
              Join
            </Text>
          </Link>
        </>
      )}
    </>
  );
}
