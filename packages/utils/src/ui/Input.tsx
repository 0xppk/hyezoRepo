"use client";

import { cva, VariantProps } from "cva";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "../utils";
import { type InputProps } from "./Form";
import { FieldError } from "./index";

const inputStyles = cva(
  "peer z-20 w-full appearance-none duration-300 rounded-md border bg-white text-gray-800 focus:ring-2 focus:outline-none disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200",
  {
    variants: {
      color: {
        twitter: "focus:border-twitter-600 focus:ring-twitter-500",
        orange: "focus:border-orange-300 focus:ring-orange-200",
        pink: "focus:border-rose-300 focus:ring-rose-200",
      },
      peer: {
        true: "peer p-4 pb-1",
        false: "px-3 py-2",
      },
    },
    defaultVariants: {
      color: "twitter",
      peer: true,
    },
  },
);

type InputStyleProps = VariantProps<typeof inputStyles>;
type InputType = keyof InputProps;

interface Props extends InputStyleProps, Omit<ComponentProps<"input">, "color"> {
  type: InputType;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  type = "text",
  placeholder = " ",
  color,
  fullWidth,
  className,
  ...props
}: Props) {
  const { register } = useFormContext();
  const peer = !!label;

  return (
    <div className={`relative ${fullWidth && "w-full"}`}>
      <input
        spellCheck={false}
        className={cn(inputStyles({ color, peer, className }))}
        type={type}
        placeholder=" "
        {...props}
        {...register(type)}
      />
      <label
        htmlFor={label}
        className="pointer-events-none absolute -top-1 left-3 z-0 origin-[0] scale-75 text-sm text-gray-400 decoration-orange-600 decoration-wavy decoration-1 underline-offset-4 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:underline sm:translate-y-1 sm:peer-focus:translate-y-1 md:translate-y-0 md:peer-focus:translate-y-0"
      >
        {label}
      </label>
      <div className="pt-2 pl-2 text-xs font-semibold text-rose-500">
        <FieldError name={type} />
      </div>
    </div>
  );
}
