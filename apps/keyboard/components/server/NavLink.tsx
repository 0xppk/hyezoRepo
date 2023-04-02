import Link, { type LinkProps } from "next/link";
import { Text } from "@hyezo/ui";

type NavLinkProps = {
  children: ReactNode;
} & LinkProps;

export default function NavLink({ children, ...props }: NavLinkProps) {
  return (
    <Link {...props}>
      <Text variant="xl/bold">{children}</Text>
    </Link>
  );
}
