import { ComponentProps } from 'react';

type ButtonOrLinkType = ComponentProps<"button"> & ComponentProps<"a">;
interface ButtonOrLinkProps extends Omit<ButtonOrLinkType, "color"> {
}
/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
declare function ButtonOrLink({ href, ...props }: ButtonOrLinkProps): JSX.Element;

export { ButtonOrLinkProps, ButtonOrLink as default };
