import { cva, VariantProps } from "cva";
import { ButtonOrLink, Props as ButtonOrLinkProps } from "./ButtonOrLink";

const buttonStyles = cva(
  "flex itmes-center justify-center px-4 py-2 rounded font-medium focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      intent: {
        primary: "bg-blue-500 text-white",
        secondary:
          "bg-gray-200 text-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-100 focus:ring-gray-500",
        danger: "bg-red-500 text-white focus:ring-red-500",
      },
      outline: {
        true: "bg-transparent border",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      fullWidth: false,
    },
    compoundVariants: [
      {
        intent: ["primary", "danger"],
        outline: true,
        class: "border-red-500 text-red-500",
      },
    ],
  },
);

export interface Props
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

export function Button({ intent, fullWidth, outline, ...props }: Props) {
  return (
    <ButtonOrLink
      className={buttonStyles({ intent, outline, fullWidth })}
      {...props}
    />
  );
}
