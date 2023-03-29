import { cva, VariantProps } from "cva";
import { ComponentProps, ReactNode } from "react";
import { cn } from "../utils";

const textStyles = cva("", {
  variants: {
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-md",
      lg: "text-lg",
      xl: "text-xl",
      "2xl": "text-2xl",
      "3xl": "text-3xl",
    },
    weight: {
      light: "font-light",
      normal: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "normal",
  },
});

type TextStyleProps = VariantProps<typeof textStyles>;

export interface TextProps
  extends Omit<TextStyleProps, "size" | "weight">,
    ComponentProps<"div"> {
  variant: `${NonNullable<TextStyleProps["size"]>}/${NonNullable<
    TextStyleProps["weight"]
  >}`;
}

/**
 * The text component that can be used in a variety of situations.
 * @params {TextStyleProps} variant - Text `size/weight`. It's a combinations of "sm", "md", "lg", or "xl".
 * @params {ReactNode} children - Text content.
 */
export default function Text({ variant, children, className, ...props }: TextProps) {
  const [size, weight] = variant.split("/") as [
    TextStyleProps["size"],
    TextStyleProps["weight"],
  ];

  return (
    <div className={cn(textStyles({ size, weight, className }))} {...props}>
      {children}
    </div>
  );
}
