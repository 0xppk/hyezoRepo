import Link, { type LinkProps } from "next/link";
import { Text, TextProps } from "@hyezo/ui";

type NavLinkProps = {
  children: ReactNode;
  variant?: TextProps["variant"];
} & LinkProps;

export default function NavLink({
  children,
  variant = "xl/bold",
  ...props
}: NavLinkProps) {
  return (
    <Link {...props}>
      <Text variant={variant} className="interactable" data-type="link">
        {children}
      </Text>
    </Link>
  );
}
