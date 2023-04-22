"use client";

import { useRouter } from "next/navigation";
import { SignInForm } from "~/components/client";
import { Icons, OAuthProviders, SignInFormSpacer } from "~/components/server";
import { useForceLinkToCreateNickname, usePermitEntering } from "~/hooks";

export default function LoginPage() {
  const [isEnter] = usePermitEntering();
  useForceLinkToCreateNickname();
  const router = useRouter();

  return (
    <div
      className={`mb-5 grid h-screen w-screen place-items-center duration-1000 ${
        isEnter ? "scale-100 opacity-100" : "scale-150 opacity-0"
      }`}
    >
      <div className="modal rounded-xl">
        <div className="drop-shadow-blue min-w-[400px] rounded-xl bg-gray-900 px-8 py-6">
          <SignInForm />
          <SignInFormSpacer />
          <OAuthProviders />
        </div>
        <div
          onClick={() => router.push("/")}
          className="absolute inset-x-0 -bottom-16 flex cursor-pointer items-center justify-center gap-3 text-xs"
        >
          <span>Go home</span>
          <Icons.back className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
