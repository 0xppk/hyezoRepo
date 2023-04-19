import { Text } from "@hyezo/ui";
import Image from "next/image";
import Link from "next/link";
import { SignOutBtn } from "~/components/client";
import { useUserSession } from "~/hooks";

export default function UserInfo() {
  const user = useUserSession();

  return (
    <>
      {user ? (
        <>
          <SignOutBtn className="hidden sm:block">
            <Text variant="xs/normal">Logout</Text>
          </SignOutBtn>
          <div className="relative h-8 w-8 sm:h-9 sm:w-9">
            <Link href="/profile">
              <Image
                src={user?.image || "/images/pingu.webp"}
                className="interactable w-auto cursor-pointer rounded-full"
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
          <Link href="/login">
            <Text variant="xs/normal" className="interactable" data-type="circle">
              Join
            </Text>
          </Link>
        </>
      )}
    </>
  );
}
