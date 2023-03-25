"use client";

import { Button, Form, Input, Spacer, SubmitButton, Text } from "@hyezo/ui";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useIsoMorphicEffect } from "@hyezo/hooks";
import { Icons, SplitWord } from "~/components";
import { createTitle } from "~/lib/utils";
import { useState, useEffect } from "react";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();
  const [isVisit, setIsVisit] = useState(false);

  useEffect(() => {
    setIsVisit(true);
  }, []);

  useEffect(() => {
    if (session?.user.id) router.push("/");
  }, [session]);

  return (
    <div
      className={`grid h-screen place-items-center duration-1000 ${
        isVisit ? "scale-100 opacity-100" : "scale-150 opacity-0"
      }`}
    >
      <div className="modal rounded-xl">
        <div className="drop-shadow-blue  min-w-[400px] rounded-xl bg-gray-900 py-6 px-8">
          <Form
            onSubmit={({ email }) => {
              signIn("email", {
                email,
                redirect: false,
              });
            }}
            className="items-center"
          >
            <Text variant="3xl/bold" color="white">
              Sign In
            </Text>
            <Text variant="xs/normal" className="mb-5 mt-2">
              Please login to use platform
            </Text>
            <Input type="email" label="email" fullWidth />
            <SubmitButton color="twitter" outline fullWidth>
              Sign In
            </SubmitButton>
          </Form>
          <Spacer
            wrapperClassName="py-5"
            textClassName="bg-gray-900 text-white"
            borderClassName="border-white"
          >
            <Text variant="xs/normal">OR LOGIN WITH</Text>
          </Spacer>
          <div className="flex justify-between gap-3">
            <Button
              color="black"
              outline
              className="providers relative aspect-square basis-1/3 flex-col items-center"
            >
              <Icons as="github" className="hover:animate-wiggle mx-0 h-6 w-6" />
              <div className="absolute bottom-0 flex">
                {createTitle(SplitWord.Provider, "github")}
              </div>
            </Button>
            <Button
              color="black"
              outline
              className="providers relative aspect-square basis-1/3 flex-col items-center"
            >
              <Icons as="discord" className="mx-0 h-6 w-6" />
              <div className="absolute bottom-0 flex">
                {createTitle(SplitWord.Provider, "discord")}
              </div>
            </Button>
            <Button
              color="black"
              outline
              className="providers relative aspect-square basis-1/3 flex-col items-center"
            >
              <Icons as="kakao" className="mx-0 h-6 w-6" />
              <div className="absolute bottom-0 flex">
                {createTitle(SplitWord.Provider, "kakao")}
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
