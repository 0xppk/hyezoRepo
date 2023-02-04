import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';

type ButtonOrLinkProps = ComponentProps<"button"> & ComponentProps<"a">;
interface Props$1 extends ButtonOrLinkProps {
}
/**
 * This is a base component that will render either a button or a link,
 * depending on the props that are passed to it. The link rendered will
 * also correctly get wrapped in a next/link component to ensure ideal
 * page-to-page transitions.
 */
declare function ButtonOrLink({ href, ...props }: Props$1): JSX.Element;

declare const buttonStyles: (props?: ({
    intent?: "primary" | "secondary" | "danger" | null | undefined;
    outline?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
interface Props extends Props$1, VariantProps<typeof buttonStyles> {
}
declare function Button({ intent, fullWidth, outline, ...props }: Props): JSX.Element;

export { Button, ButtonOrLink };
