"use client";

import { signOut } from "next-auth/react";
import { Text } from "@hyezo/ui";

type SignOutProps = {
  children: ReactNode;
};

export default function SignOutBtn({ children }: SignOutProps) {
  return (
    <button onClick={() => signOut()}>
      <Text variant="xl/bold">{children}</Text>
    </button>
  );
}
