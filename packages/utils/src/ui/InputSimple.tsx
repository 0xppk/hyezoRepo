"use client";
import { useRef } from "react";
import { z } from "zod";
import { useInput } from "../hooks";
import { Button } from "./index";

const InputPropsSchema = z.object({
  submitAction: z.function().args(z.string()).returns(z.void()).optional(),
  debounceTime: z.number().optional(),
  placeholder: z.string({ coerce: true }).optional(),
});

type Props = z.infer<typeof InputPropsSchema>;

/**
 * A input component that is used to input text. It operates without any `form` tag.
 */
export default function InputSimple({
  submitAction,
  debounceTime = 300,
  placeholder = "",
}: Props) {
  const [value, onChange, onSubmit] = useInput(submitAction, debounceTime);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex">
      <input
        type="text"
        spellCheck="false"
        ref={inputRef}
        className="mr-2 h-10 resize-none rounded-lg border-[1px] border-black/10 px-3 py-2 leading-5 caret-rose-500"
        placeholder={placeholder}
        onChange={onChange}
      />

      <Button
        onClick={() => {
          if (inputRef.current?.value) {
            onSubmit();
            inputRef.current.value = "";
          }
        }}
        disabled={value === ""}
      >
        Btn
      </Button>
    </div>
  );
}
