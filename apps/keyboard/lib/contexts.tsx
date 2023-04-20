"use client";

import { SessionProvider } from "next-auth/react";
import { createContext } from "react";
import { TItems } from "~/types/prisma";

type RootProvidersProps = {
  children: ReactNode;
};

type ItemProvidersProps = {
  value: TItems[];
} & RootProvidersProps;

export const ItemContext = createContext<TItems[]>([]);

/**
 * Provider
 */
export function RootProviders({ children }: RootProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function ItemProviders({ value, children }: ItemProvidersProps) {
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
