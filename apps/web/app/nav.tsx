"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

type Props = {
  href: string;
  children: ReactNode;
};
export default function Nav({ href, children }: Props) {
  const path = usePathname();
  const active = href === path;

  return (
    <Link href={href} className={active ? "underline" : ""}>
      <h1>{children}</h1>
    </Link>
  );
}
