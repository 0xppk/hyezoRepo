import { Button } from "@hyezo/ui";
import { signIn } from "next-auth/react";
import { Icons, SplitWord } from "~/components/server";
import { createTitle } from "~/lib/utils";

type SignInBtnProps = {
  provider: "github" | "discord" | "kakao";
};

export default function SignInBtn({ provider }: SignInBtnProps) {
  const Icon = Icons[provider];

  return (
    <Button
      outline
      color="black"
      className="providers relative aspect-square basis-1/3 flex-col items-center"
      onClick={() => {
        signIn(provider, {
          redirect: true,
          callbackUrl: "/",
        });
      }}
    >
      <Icon className="hover:animate-wiggle mx-0 h-6 w-6" />
      <div className="absolute bottom-0 flex">
        {createTitle(SplitWord.Provider, provider)}
      </div>
    </Button>
  );
}
