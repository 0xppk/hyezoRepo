"use client";

import { Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

type ProvidersProps = {
  children: ReactNode;
  // session: Session | null;
};

export default function Providers({ children }: ProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
