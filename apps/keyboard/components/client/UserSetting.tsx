"use client";

import { Session } from "next-auth";
import { Modal, Text } from "@hyezo/ui";
import { useState } from "react";
import { Icons } from "~/components/server";

type UserInfoProps = {
  user?: Session["user"];
};

export default function UserSetting({ user }: UserInfoProps) {
  const [isOpen, setIsOpen] = useState(false);
  const onClick = () => setIsOpen(prev => !prev);

  return (
    <>
      <Text onClick={onClick} className="cursor-pointer" variant="2xl/bold">
        <Icons.setting className="h-4 w-4" />
      </Text>
      <Modal title="모달 타이틀" width="wide" isOpen={isOpen} setIsOpen={setIsOpen}>
        모달입니다
      </Modal>
    </>
  );
}
