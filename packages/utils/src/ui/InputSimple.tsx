"use client";

import { Dispatch, SetStateAction, useRef } from "react";
import { useEventListener, useInput } from "../hooks";
import { cn } from "../utils";
import Fuse from "fuse.js";

type Props<T> = {
  data: T[];
  setData: Dispatch<SetStateAction<T[] | undefined>>;
  labelKeys: string[];
  debounceTime?: number;
  placeholder?: string;
  className?: string;
};

export default function InputSimple<T>({
  data,
  setData,
  labelKeys,
  debounceTime = 300,
  placeholder = "",
  className,
}: Props<T>) {
  const fuse = new Fuse(data, {
    includeScore: true,
    keys: labelKeys,
  });
  const submitAction = (value: string) => {
    const filteredItems =
      value === "" ? data : fuse.search(value).map(res => ({ ...res.item }));
    setData(filteredItems);
  };

  const [value, onChange, onSubmit] = useInput(submitAction, debounceTime);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEventListener(
    "keypress",
    e => {
      if (e.key === "Enter") {
        buttonRef.current?.click();
      }
    },
    inputRef,
  );

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

      <button
        ref={buttonRef}
        className="itmes-center absolute right-0 top-0 flex h-full items-center justify-center rounded-full rounded-l-none border bg-black px-4 py-2 font-medium outline-none duration-300 hover:border-black hover:bg-transparent hover:bg-white hover:text-black focus:bg-transparent focus:font-bold focus:text-black focus:ring-1 focus:ring-black disabled:cursor-not-allowed dark:hover:bg-transparent"
        onClick={() => {
          if (inputRef.current?.value) {
            onSubmit();
            inputRef.current.value = "";
          }
        }}
      >
        ?
      </button>
    </div>
  );
}
