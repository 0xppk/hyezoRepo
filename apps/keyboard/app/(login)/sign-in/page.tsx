"use client";

import { LoginModal, SignInForm } from "~/components/client";
import { OAuthProviders, SignInFormSpacer } from "~/components/server";
import { useForceLinkToCreateNickname, usePermitEntering } from "~/hooks";

export default function LoginPage() {
  const [isEnter] = usePermitEntering();
  useForceLinkToCreateNickname();

  return (
    <LoginModal
      className={`mb-5 grid h-screen w-screen place-items-center duration-1000 ${
        isEnter ? "scale-100 opacity-100" : "scale-150 opacity-0"
      }`}
    >
      <SignInForm />
      <SignInFormSpacer />
      <OAuthProviders />
    </LoginModal>
  );
}
