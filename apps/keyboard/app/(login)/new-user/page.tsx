"use client";

import { CreateNicknameForm, LoginModal } from "~/components/client";
import { usePermitEntering } from "~/hooks";

export default function NewUser() {
  const [isEnter] = usePermitEntering();

  return (
    <LoginModal
      className={`mb-5 grid h-screen w-screen place-items-center duration-1000 ${
        isEnter ? "scale-100 opacity-100" : "scale-150 opacity-0"
      }`}
    >
      <CreateNicknameForm />
    </LoginModal>
  );
}
