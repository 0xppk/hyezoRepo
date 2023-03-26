import Link from "next/link";
import { ComponentProps } from "react";

type ButtonOrLinkType = ComponentProps<"button"> & ComponentProps<"a">;

export interface ButtonOrLinkProps extends Omit<ButtonOrLinkType, "color"> {}

/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
export default function ButtonOrLink({ href, ...props }: ButtonOrLinkProps) {
  const isLink = typeof href !== "undefined";

  let Button = <button {...props} />;
  if (isLink)
    return (
      <Link href={href} target="_blank" rel="noopener noreferrer">
        {Button}
      </Link>
    );

  return Button;
}
