"use client";

import { Button, Text } from "@hyezo/ui";
import { signOut } from "next-auth/react";
import { fetchPost } from "~/lib/utils";

export default function UserSetting() {
  return (
    <>
      <Text variant="lg/semibold" className="mb-5">
        Setting
      </Text>
      <Text variant="xs/normal" className="mb-10">
        두 번 묻지 않으니 주의하세요!
      </Text>
      <div className="flex items-center gap-20">
        <Text variant="sm/normal">회원 탈퇴</Text>
        <Button
          color="red"
          outline
          onClick={async e => {
            e.preventDefault();
            await fetchPost("/api/deleteAccount");
            await signOut();
          }}
        >
          탈퇴
        </Button>
      </div>
    </>
  );
}
