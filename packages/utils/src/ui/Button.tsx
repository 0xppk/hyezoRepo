import { cva, VariantProps } from "cva";
import { cn } from "../utils";
import { default as ButtonOrLink, ButtonOrLinkProps } from "./ButtonOrLink";

const buttonStyles = cva(
  "px-4 border outline-none py-2 rounded-lg font-medium focus:bg-transparent focus:ring-1 hover:bg-transparent dark:hover:bg-transparent disabled:cursor-not-allowed duration-300",
  {
    variants: {
      color: {
        blue: "bg-blue-500 focus:text-blue-500 focus:ring-blue-500 hover:border-blue-500 hover:text-blue-500",
        red: "bg-red-500 focus:text-red-500 focus:ring-red-500 hover:border-red-500 hover:text-red-500",
        orange:
          "bg-orange-500 focus:text-orange-500 focus:ring-orange-500 hover:border-orange-500 hover:text-orange-500",
        emerald:
          "bg-emerald-500 focus:text-emerald-500 focus:ring-emerald-500 hover:border-emerald-500 hover:text-emerald-500",
        twitter:
          "bg-twitter-500 focus:text-twitter-500 focus:ring-twitter-500 hover:border-twitter-500 hover:text-twitter-500",
        black:
          "bg-black hover:bg-white hover:text-black hover:border-black focus:text-black focus:ring-black",
      },
      size: {
        xs: "text-xs",
        sm: "text-sm",
        md: "text-md",
        lg: "text-lg",
      },
      outline: {
        true: "bg-transparent dark:bg-transparent hover:text-white",
        false: "border-transparent text-white",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    compoundVariants: [
      {
        color: "blue",
        outline: true,
        className: "border-blue-500 text-blue-500 hover:bg-blue-500",
      },
      {
        color: "red",
        outline: true,
        className: "border-red-500 text-red-500 hover:bg-red-500",
      },
      {
        color: "orange",
        outline: true,
        className: "border-orange-500 text-orange-500 hover:bg-orange-500",
      },
      {
        color: "emerald",
        outline: true,
        className: "border-emerald-500 text-emerald-500 hover:bg-emerald-500",
      },
      {
        color: "twitter",
        outline: true,
        className: "border-twitter-500 text-twitter-500 hover:bg-twitter-500",
      },
      {
        color: "black",
        outline: true,
        className:
          "border-white/75 text-white/90 hover:bg-white hover:text-black focus:text-black focus:bg-white focus:ring-black",
      },
    ],
    defaultVariants: {
      color: "twitter",
      size: "xs",
      fullWidth: false,
      outline: false,
    },
  },
);

export interface ButtonProps
  extends ButtonOrLinkProps,
    VariantProps<typeof buttonStyles> {}

/**
 * 버튼 컴퍼넌트입니다. props로 `href`를 받을 경우엔 next.js의 `<Link>` 컴퍼넌트가 버튼을 감쌉니다.
 */
export default function Button({
  /** 몇 가지 색상이 지정되어 있습니다. */
  color,
  /** 네 개의 사이즈가 지정되어 있습니다. */
  size,
  /** `true`일 경우 배경이 투명해지고 테두리만 보이게 됩니다. */
  outline,
  /** `true`일 경우 부모 요소의 넓이를 차지합니다. */
  fullWidth,
  className,
  ...props
}: ButtonProps) {
  return (
    <ButtonOrLink
      className={cn(buttonStyles({ color, outline, fullWidth, size, className }))}
      {...props}
    />
  );
}
