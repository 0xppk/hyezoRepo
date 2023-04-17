"use client";

import { useRef } from "react";
import { useInput } from "../hooks";
import { Button } from "./index";
import { cn } from "../utils";

type Props = {
  submitAction: (value: string) => any;
  debounceTime?: number;
  placeholder?: string;
  className?: string;
};

export default function InputSimple({
  submitAction,
  debounceTime = 300,
  placeholder = "",
  className,
}: Props) {
  const [value, onChange, onSubmit] = useInput(submitAction, debounceTime);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="relative flex max-w-max">
      <input
        type="text"
        spellCheck="false"
        ref={inputRef}
        className={cn(
          `h-10 resize-none rounded-full border border-black py-2 pl-3 pr-12 leading-5 text-black caret-blue-800 focus:outline-none ${className}`,
        )}
        placeholder={placeholder}
        onChange={onChange}
      />

      <Button
        color="black"
        className="absolute right-0 top-0 h-full items-center rounded-full rounded-l-none px-4"
        onClick={() => {
          if (inputRef.current?.value) {
            onSubmit();
            inputRef.current.value = "";
          }
        }}
        disabled={value === ""}
      >
        ?
      </Button>
    </div>
  );
}
