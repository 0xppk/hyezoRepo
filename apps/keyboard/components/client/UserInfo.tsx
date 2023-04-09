import { Modal } from "@hyezo/ui";
import Image from "next/image";
import { useState } from "react";
import { Text } from "@hyezo/ui";
import { CreateNicknameForm, SignOutBtn } from "~/components/client";
import { useUserSession } from "~/hooks";
import DeleteAccount from "./DeleteAccount";

export default function UserInfo() {
  const user = useUserSession();
  const [isOpen, setIsOpen] = useState(false);
  const modalOpen = () => setIsOpen(true);

  return (
    <>
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

      <Modal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        width="narrow"
        className="drop-shadow-blue flex min-w-max flex-col items-center rounded-xl bg-gray-900"
        title="Search Users"
      >
        <Modal.Content className="relative grid h-96 min-w-[15rem] grid-cols-2 place-items-center text-sm">
          <CreateNicknameForm />
          <DeleteAccount />
        </Modal.Content>
      </Modal>
    </>
  );
}
