import { default as ButtonOrLink, ButtonOrLinkProps } from "./ButtonOrLink";

export interface Props extends ButtonOrLinkProps {}

export default function Link({ href, ...props }: Props) {
  return (
    <ButtonOrLink
      href={href}
      className="font-medium text-gray-900 underline hover:text-opacity-80 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:text-gray-100"
      {...props}
    />
  );
}
