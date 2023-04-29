"use client";

import { Form, Input, SubmitButton, Text, zodSubmitHandler } from "@hyezo/ui";
import Image from "next/image";
import { useUserSession } from "~/hooks";
import { fetchPost, reloadSession } from "~/lib/utils";

export default function UserInfo() {
  const user = useUserSession();

  const onSubmit: zodSubmitHandler = async ({ nickname }) => {
    const res = await fetchPost<TResponse>("/api/updateNickname", {
      body: JSON.stringify(nickname),
    });
    if (res.success) alert("Successfully updated");
    else alert("이미 사용중인 닉네임입니다");
    reloadSession();
  };
  return (
    <Form
      onSubmit={onSubmit}
      className="grid w-full place-items-center gap-10 p-5 md:px-20"
    >
      <Image
        src={user?.image || "/images/pingu.png"}
        alt="profile"
        width={120}
        height={120}
        className="aspect-1 rounded-full"
      />
      <div className="grid gap-2">
        <Text variant="xs/normal">닉네임</Text>
        <Input autoFocus={false} name="nickname" placeholder={user?.nickname || ""} />
      </div>
      <SubmitButton>Save Cahnges</SubmitButton>
    </Form>
  );
}
