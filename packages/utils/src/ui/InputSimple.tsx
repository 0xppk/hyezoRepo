"use client";

import Fuse from "fuse.js";
import { Dispatch, SetStateAction, useRef } from "react";
import { useEventListener, useInput } from "../hooks";
import { cn } from "../utils";
import { TiDelete } from "react-icons/ti";
import { RiSearchLine } from "react-icons/ri";

type Props<T> = {
  data: T[];
  setData: Dispatch<SetStateAction<T[]>>;
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
  const submitAction = async (value: string) => {
    const filteredItems =
      value === "" ? data : fuse.search(value).map(res => ({ ...res.item }));
    setData(filteredItems);
  };

  const [, onChange, onSubmit, clear] = useInput(submitAction, debounceTime);
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
    <div className="relative flex max-w-max items-center">
      <button
        ref={buttonRef}
        onClick={() => {
          if (inputRef.current?.value) {
            onSubmit();
            inputRef.current.value = "";
          }
        }}
        className="absolute flex h-10 items-center py-2 pl-3 text-black/70 hover:text-black/90"
      >
        <RiSearchLine className="h-5 w-5" />
      </button>
      <input
        type="text"
        spellCheck="false"
        ref={inputRef}
        className={cn(
          `h-10 resize-none rounded-full border border-black py-2 pl-10 pr-10 leading-5 text-black caret-blue-800 focus:outline-none ${className}`,
        )}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button
        ref={buttonRef}
        className="absolute right-0 flex h-10 items-center justify-center rounded-full py-2 pr-3 font-medium text-black/30 outline-none duration-300 hover:text-black"
        onClick={() => {
          if (inputRef.current?.value) {
            clear();
            inputRef.current.value = "";
          }
        }}
      >
        <TiDelete className="h-4 w-4" />
      </button>
    </div>
  );
}
