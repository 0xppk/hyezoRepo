import Link, { type LinkProps } from "next/link";
import { Text, TextProps } from "@hyezo/ui";

type NavLinkProps = {
  children: ReactNode;
  className?: string;
  variant?: TextProps["variant"];
} & LinkProps;

export default function NavLink({
  children,
  variant = "md/normal",
  className,
  ...props
}: NavLinkProps) {
  return (
    <Link {...props}>
      <Text
        variant={variant}
        data-type="link"
        className={`flex items-center gap-3 ${className}`}
      >
        {children}
      </Text>
    </Link>
  );
}
