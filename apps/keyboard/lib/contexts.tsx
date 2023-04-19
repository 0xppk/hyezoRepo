"use client";

import { SessionProvider } from "next-auth/react";
import { createContext } from "react";

type RootProvidersProps = {
  children: ReactNode;
};

type ItemProvidersProps = {
  value: TAllItems[];
} & RootProvidersProps;

export const ItemContext = createContext<TAllItems[]>([]);

/**
 * Provider
 */
export function RootProviders({ children }: RootProvidersProps) {
  return <SessionProvider>{children}</SessionProvider>;
}

export function ItemProviders({ value, children }: ItemProvidersProps) {
  return <ItemContext.Provider value={value}>{children}</ItemContext.Provider>;
}
