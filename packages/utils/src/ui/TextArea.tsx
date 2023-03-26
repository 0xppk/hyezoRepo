"use client";
import { ComponentProps } from "react";
import { useFormContext } from "react-hook-form";
import { FieldError } from "./Form";

interface Props extends ComponentProps<"textarea"> {
  label: string;
  type?: "textarea";
}

export default function TextArea({ label, type = "textarea", ...props }: Props) {
  const { register } = useFormContext();

  return (
    <label>
      <div className="mb-1 font-medium text-gray-800 dark:text-gray-200">{label}</div>
      <textarea
        className="focus:border-brand-600 focus:ring-brand-500 w-full rounded-md border bg-white px-4 py-2 text-gray-800 caret-rose-500 disabled:bg-gray-500 disabled:bg-opacity-20 disabled:opacity-60 dark:bg-gray-900 dark:text-gray-200"
        spellCheck="false"
        placeholder="메시지를 입력하세요"
        {...props}
        {...register(type)}
      />
      <div className="pt-2 pl-3">
        <FieldError name={type} />
      </div>
    </label>
  );
}
