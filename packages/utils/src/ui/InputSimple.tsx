"use client";

import Fuse from "fuse.js";
import { Dispatch, SetStateAction, useId, useRef } from "react";
import { HiChevronRight } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";
import { useEventListener, useInput, useLocalStorage } from "../hooks";
import { cn } from "../utils";

type Props<T, K extends keyof T> = {
  data: T[];
  setData: Dispatch<SetStateAction<T[]>>;
  labelKeys: Array<keyof T | keyof T[K]>;
  debounceTime?: number;
  placeholder?: string;
  className?: string;
  history?: boolean;
};

export default function InputSimple<T, K extends keyof T = keyof T>({
  data,
  setData,
  labelKeys,
  debounceTime = 300,
  placeholder = "",
  className,
  history,
}: Props<T, K extends keyof T ? K : never>) {
  const [storedValue, setStoredValue, reset] = useLocalStorage<string[]>("search", []);
  const id = useId();

  const fuse = new Fuse(data, {
    includeScore: true,
    minMatchCharLength: 2,
    threshold: 0.3,
    keys: labelKeys as string[],
  });

  const submitAction = async (value: string) => {
    const filteredItems =
      value === "" ? data : fuse.search(value).map(res => ({ ...res.item }));
    setData(filteredItems);
    setStoredValue(prev => [...new Set([value, ...prev])]);
  };

  const [, onChange, onSubmit, clear] = useInput(submitAction, debounceTime);
  const inputRef = useRef<HTMLInputElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEventListener(
    "keypress",
    e => {
      if (e.key === "Enter") buttonRef.current?.click();
    },
    inputRef,
  );

  return (
    <div className="relative flex items-center overflow-x-clip">
      <button
        ref={buttonRef}
        onClick={() => {
          onSubmit();
          if (inputRef.current?.value) inputRef.current.value = "";
        }}
        className="absolute z-10 flex h-10 items-center py-2 pl-3 text-black/70 hover:text-black/90"
      >
        <RiSearchLine className="h-5 w-5" />
      </button>
      <input
        type="text"
        spellCheck={false}
        autoComplete="off"
        ref={inputRef}
        className={cn(
          `text-smoke-500 h-10 resize-none rounded-full bg-white/20 py-2 pl-10 pr-10 caret-orange-500 saturate-150 backdrop-blur-md placeholder:text-white/40 focus:outline-none ${className}`,
        )}
        placeholder={placeholder}
        onChange={onChange}
      />
      <button
        className="absolute right-0 flex h-10 items-center justify-center rounded-full py-2 pr-3 font-medium text-black/30 outline-none duration-300 hover:scale-125 hover:text-black"
        onClick={() => {
          clear();
          reset();
          setData(data);
          if (inputRef.current?.value) inputRef.current.value = "";
        }}
      >
        <TiDelete className="h-4 w-4" />
      </button>

      {history && (
        <div
          className={`absolute inset-x-0 -bottom-9 flex min-w-max items-center gap-4 overflow-x-hidden text-xs text-white/30 duration-200 ${
            storedValue[0] ? "opacity-100" : "opacity-0"
          }`}
        >
          <HiChevronRight className="h-4 w-4 shrink-0" />
          {storedValue.map(historyItem => (
            <span
              key={id}
              className="cursor-pointer"
              onClick={() => submitAction(historyItem)}
            >
              {historyItem}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
