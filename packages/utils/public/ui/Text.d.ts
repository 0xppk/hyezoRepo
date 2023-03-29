import * as cva_dist_types from 'cva/dist/types';
import { VariantProps } from 'cva';
import { ComponentProps } from 'react';

declare const textStyles: (props?: ({
    size?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | null | undefined;
    weight?: "bold" | "light" | "normal" | "semibold" | null | undefined;
} & cva_dist_types.ClassProp) | undefined) => string;
type TextStyleProps = VariantProps<typeof textStyles>;
interface TextProps extends Omit<TextStyleProps, "size" | "weight">, ComponentProps<"div"> {
    variant: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<TextStyleProps["weight"]>}`;
}
/**
 * The text component that can be used in a variety of situations.
 * @params {TextStyleProps} variant - Text `size/weight`. It's a combinations of "sm", "md", "lg", or "xl".
 * @params {ReactNode} children - Text content.
 */
declare function Text({ variant, children, className, ...props }: TextProps): JSX.Element;

export { TextProps, Text as default };
