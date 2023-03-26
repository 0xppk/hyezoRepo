import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ReactNode } from 'react';

declare const textStyles: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "light" | "normal" | "semibold" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type TextStyleProps = VariantProps<typeof textStyles>;
interface TextProps extends Omit<TextStyleProps, "size" | "weight"> {
    variant: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<TextStyleProps["weight"]>}`;
    children?: ReactNode;
    color?: string;
    className?: string;
}
/**
 * The text component that can be used in a variety of situations.
 * @params {TextStyleProps} variant - Text `size/weight`. It's a combinations of "sm", "md", "lg", or "xl".
 * @params {ReactNode} children - Text content.
 * @params {string} color - Text color.
 */
declare function Text({ variant, children, color, className, ...props }: TextProps): JSX.Element;

export { TextProps, Text as default };
