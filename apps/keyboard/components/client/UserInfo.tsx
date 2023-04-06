import { Modal } from "@hyezo/ui";
import Image from "next/image";
import { useState } from "react";
import { Text } from "@hyezo/ui";
import { SignOutBtn } from "~/components/client";
import { useUserSession } from "~/hooks";

export default function UserInfo() {
  const user = useUserSession();
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = () => setIsOpen(true);

  return (
    <>
      {/* <UserSetting /> */}
      <SignOutBtn className="hidden sm:block">
        <Text variant="xs/normal">Logout</Text>
      </SignOutBtn>
      <div className="relative h-8 w-8 sm:h-9 sm:w-9">
        <Image
          src={user?.image || "/images/pingu.webp"}
          onClick={modalOpen}
          className="w-auto cursor-pointer rounded-full"
          alt="프로필"
          sizes="100%"
          fill
        />
      </div>

      <Modal title="모달 타이틀" width="wide" isOpen={isOpen} setIsOpen={setIsOpen}>
        모달입니다
      </Modal>
    </>
  );
}
