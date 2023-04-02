import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ButtonOrLinkProps } from './ButtonOrLink.js';
import 'react';

declare const buttonStyles: (props?: ({
    color?: "blue" | "red" | "orange" | "emerald" | "twitter" | "black" | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    outline?: boolean | null | undefined;
    fullWidth?: boolean | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
interface ButtonProps extends ButtonOrLinkProps, VariantProps<typeof buttonStyles> {
}
/**
 * Button component that can be used as a link or button. If `href` is provided, it will be rendered as a children of Next.js `<Link>` component. Otherwise, it will be rendered as a button.
 * @params {string} color - The color of the button.
 * @params {string} size - The size of the button. It is a combinations of `xs`, `sm`, `md`, `lg`.
 * @params {boolean} outline - Whether the button should have an outline & transparent.
 * @params {boolean} fullWidth - Whether the button should have a full width.
 */
declare function Button({ color, fullWidth, outline, size, className, ...props }: ButtonProps): JSX.Element;

export { ButtonProps, Button as default };
