"use client";
import Text from "@hyezo/ui/Text";
import Link from "next/link";
import { useSelectedLayoutSegment, usePathname } from "next/navigation";
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
      <Text variant="lg/semibold">{children}</Text>
    </Link>
  );
}
