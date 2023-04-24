"use client";

import { cva, VariantProps } from "cva";
import { ComponentProps, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { cn } from "../utils";
import { type InputNameProps } from "./Form";
import { FieldError } from "./index";

const inputStyles = cva(
  "peer w-full duration-300 bg-white text-gray-800 focus:outline-0 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200",
  {
    variants: {
      color: {
        twitter: "focus:border-twitter-600 border rounded-lg",
        orange: "focus:border-orange-300 border rounded-lg",
        pink: "focus:border-rose-300 border rounded-lg",
        darkNavy:
          "border-gray-800 placeholder:text-right border-b rounded-none text-white/80 placeholder:text-gray-600 bg-gray-900 hover:border-gray-700/70",
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
type InputType = keyof InputNameProps;

interface Props extends InputStyleProps, Omit<ComponentProps<"input">, "color"> {
  name: InputType;
  label?: string;
  fullWidth?: boolean;
}

export default function Input({
  label,
  type = "text",
  name,
  placeholder = " ",
  color,
  fullWidth,
  className,
  ...props
}: Props) {
  const {
    register,
    setFocus,
    formState: { isDirty },
  } = useFormContext();

  const peer = !!label;

  useEffect(() => {
    if (!isDirty) setFocus(name);
  }, [isDirty, setFocus]);

  return (
    <div className={`relative ${fullWidth ? "w-full" : ""}`}>
      <input
        spellCheck={false}
        className={cn(inputStyles({ color, peer, className }))}
        type={type}
        placeholder={placeholder ?? " "}
        {...props}
        {...register(name)}
      />
      {label && (
        <label
          htmlFor={label}
          className="pointer-events-none absolute -top-1 left-3 z-0 origin-[0] scale-75 text-sm text-gray-400 decoration-orange-600 decoration-wavy decoration-1 underline-offset-4 duration-300 peer-placeholder-shown:translate-y-3 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-focus:underline sm:translate-y-1 sm:peer-focus:translate-y-1 md:translate-y-0 md:peer-focus:translate-y-0"
        >
          {label}
        </label>
      )}
      <FieldError name={name} />
    </div>
  );
}
