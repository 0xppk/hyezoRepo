"use client";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "./Form";
import { cn } from "../utils";
interface Props extends ComponentProps<"textarea"> {
  name: string;
  label?: string;
}

export default function TextArea({ label, name, className, ...props }: Props) {
  const { register } = useFormContext();

  return (
    <label>
      <div className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</div>
      <textarea
        className={cn(
          `w-full rounded-md border bg-white px-4 py-2 text-gray-800 focus:outline-none disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200 ${className}`,
        )}
        spellCheck="false"
        placeholder="메시지를 입력하세요"
        {...props}
        {...register(name)}
      />
      <div className="pl-3 pt-2">
        <FieldError name={name} />
      </div>
    </label>
  );
}
