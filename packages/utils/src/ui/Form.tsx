"use client";
import { useZodForm } from "../hooks";
import { ComponentProps, useEffect } from "react";
import { FormProvider, SubmitHandler, useFormContext } from "react-hook-form";
import { z } from "zod";
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
    combo: z.string(),
    nickname: z
      .string()
      .min(2, "너무 짧아요 😢")
      .max(10, "닉네임은 2~10자 사이의 길이로 지어주세요.")
      .transform(v => v.replace(/\s/g, "")),
  })
  .partial();

export type InputProps = z.infer<typeof InputSchema>;
export type zodSubmitHandler = SubmitHandler<InputProps>;

interface FormProps extends Omit<ComponentProps<"fieldset">, "onSubmit"> {
  onSubmit: zodSubmitHandler;
}

/**
 * The form component is used to render a `form`. Given a `children` like input, select, textarea, etc, it will render a `form` element.
 * And also it requires `onSubmit` event handler that will be called when the form is submitted.
 * Validating a form is done by using `zod` schema & custom hook `useZodForm`.
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

  if (!error) return null;

  return <span>{error.message as string}</span>;
}
