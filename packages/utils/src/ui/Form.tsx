"use client";

import { ComponentProps } from "react";
import { FormProvider, SubmitHandler, useFormContext } from "react-hook-form";
import { z } from "zod";
import { useZodForm } from "../hooks";
import { cn } from "../utils";

const InputSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(8, "More than 8 characters"),
    url: z.string().url("Starts with: https://www."),
    textarea: z.string(),
    text: z.string(),
    select: z
      .union([z.string(), z.number()])
      .or(z.array(z.union([z.string(), z.number()])))
      .or(z.record(z.any())),
    combo: z.string().min(1),
    nickname: z
      .string()
      .min(2, "너무 짧아요 😢")
      .max(10, "닉네임은 2~10자 사이의 길이로 지어주세요.")
      .transform(v => v.replace(/\s/g, "")),
    title: z.string().min(1, "필수입력 사항입니다"),
    price: z.coerce.number().min(1, "최소 1만원입니다").max(100, "최대 100만원입니다"),
    layout: z.string().nullish(),
    color: z.string().nullish(),
    message: z.string().nullish(),
    select2: z
      .union([z.string(), z.number()])
      .or(z.array(z.union([z.string(), z.number()])))
      .or(z.record(z.any())),
    select3: z
      .union([z.string(), z.number()])
      .or(z.array(z.union([z.string(), z.number()])))
      .or(z.record(z.any())),
    allUsersCombo: z.record(z.string(), z.any()),
    objDataCombo: z.record(z.string(), z.any()),
  })
  .partial();

export type InputNameProps = z.infer<typeof InputSchema>;
export type zodSubmitHandler = SubmitHandler<InputNameProps>;

interface FormProps extends Omit<ComponentProps<"fieldset">, "onSubmit"> {
  onSubmit: zodSubmitHandler;
}

/**
 * `zod`를 결합한 `react-hook-form`.
 */
export default function Form({ onSubmit, className, ...props }: FormProps) {
  const form = useZodForm({ schema: InputSchema });
  const { formState, handleSubmit, reset } = form;

  const onSubmitWithReset: zodSubmitHandler = data => {
    onSubmit(data);
    reset();
  };

  return (
    <FormProvider {...form}>
      <form onSubmit={handleSubmit(onSubmitWithReset)}>
        <fieldset
          className={cn(`flex flex-col gap-2 disabled:cursor-progress ${className}`)}
          disabled={formState.isSubmitting}
          {...props}
        >
          {props.children}
        </fieldset>
      </form>
    </FormProvider>
  );
}

interface FieldErrorProps {
  name?: string;
}

export function FieldError({ name }: FieldErrorProps) {
  const {
    formState: { errors },
  } = useFormContext();

  if (!name) return null;
  const error = errors[name];

  return (
    <p
      className={`pointer-events-none absolute inset-y-0 right-0 z-10 mr-3 grid place-items-center break-keep text-xs font-light text-red-500 duration-300 ${
        error ? "opacity-100" : "opacity-0"
      }`}
    >
      {error?.message as string}
    </p>
  );
}
