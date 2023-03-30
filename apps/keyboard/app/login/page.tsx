"use client";

import { OAuthProviders, SignInForm, SignInFormSpacer } from "~/components/server";
import usePermitEntering from "~/hooks/usePermitEntering";

export default function LoginPage() {
  const [isEnter] = usePermitEntering();

  return (
    <div
      className={`grid h-screen w-screen place-items-center duration-1000 ${
        isEnter ? "scale-100 opacity-100" : "scale-150 opacity-0"
      }`}
    >
      <div className="modal rounded-xl">
        <div className="drop-shadow-blue  min-w-[400px] rounded-xl bg-gray-900 py-6 px-8">
          <SignInForm />
          <SignInFormSpacer />
          <OAuthProviders />
        </div>
      </div>
    </div>
  );
}
