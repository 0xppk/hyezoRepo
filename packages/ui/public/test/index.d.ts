import { ComponentProps } from 'react';

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;
interface Props extends ButtonOrLinkProps {
}
/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
declare function ButtonOrLink({ href, ...props }: Props): JSX.Element;

export { ButtonOrLink };
