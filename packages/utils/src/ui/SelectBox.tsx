"use client";
import { Listbox, Transition } from "@headlessui/react";
import { VariantProps, cva } from "cva";
import { ChangeEventHandler, ComponentProps, Fragment, useMemo, useRef } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { HiCheck, HiChevronUpDown, HiMagnifyingGlass } from "react-icons/hi2";
import { useClickOutside, useInput } from "../hooks";
import { removeDuplicated } from "../utils/removeDuplicated";
import { InputNameProps } from "./Form";

const selectStyles = cva("", {
  variants: {
    color: {
      twitter: "bg-twitter-100 text-twitter-900",
      orange: "bg-amber-100 text-amber-900",
      pink: "bg-rose-100 text-rose-900",
      emerald: "bg-emerald-100 text-emerald-900",
      darkNavy: "bg-gray-900 text-gray-900",
    },
    iconColor: {
      twitter: "text-twitter-600",
      orange: "text-amber-600",
      pink: "text-rose-600",
      emerald: "text-emerald-600",
      darkNavy: "text-gray-900",
    },
    width: {
      narrower: "max-w-xs",
      narrow: "max-w-lg",
      regular: "max-w-xl",
      wide: "max-w-2xl",
      wider: "max-w-3xl",
    },
  },
});

type SelectStyleProps = VariantProps<typeof selectStyles>;

export interface Props<T, K extends keyof T>
  extends Omit<SelectStyleProps, "iconColor">,
    Omit<ComponentProps<"div">, "color"> {
  list: T[];
  name: keyof InputNameProps;
  labelKey?: K;
  uniqueKey?: keyof T;
  searchBar?: boolean;
  removeDuplicates?: boolean;
}

export default function SelectBox<T, K extends keyof T>({
  list,
  name,
  color = "twitter",
  width = "regular",
  labelKey = "name" as K,
  uniqueKey = "name" as keyof T,
  removeDuplicates = false,
  searchBar,
}: Props<T, K>) {
  const { control } = useFormContext();

  const items = removeDuplicates
    ? useMemo(() => removeDuplicated(list, labelKey), [list])
    : list;
  const [inputValue, changeHandeler, , reset] = useInput(() => {}, 200);

  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, reset);
  const iconColor = color;

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={items[0]?.[labelKey]}
      rules={{ required: true }}
      render={({ field }) => (
        <div className={`${selectStyles({ width })}`} ref={ref}>
          <Listbox {...field}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate text-gray-900">{field.value}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <HiChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={reset}
              >
                <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {searchBar && <SearchBar changeHandeler={changeHandeler} />}

                  {items.map((item, i) => (
                    <Listbox.Option
                      key={`${String(item[labelKey])}+ ${i}`}
                      className={({ active }) =>
                        `relative z-10 cursor-default select-none bg-white py-2 pl-10 pr-4 ${
                          active ? selectStyles({ color }) : "text-gray-900"
                        } ${
                          String(item[labelKey]).toLowerCase().startsWith(inputValue)
                            ? "block"
                            : "hidden"
                        }`
                      }
                      disabled={
                        !String(item[labelKey]).toLowerCase().startsWith(inputValue)
                      }
                      value={String(item[labelKey])}
                    >
                      {({ selected }) => (
                        <>
                          <span
                            className={`block truncate ${
                              selected ? "font-medium" : "font-normal"
                            }`}
                          >
                            {String(item[labelKey])}
                          </span>
                          {selected ? (
                            <span
                              className={`absolute inset-y-0 left-0 flex items-center pl-3 ${selectStyles(
                                { iconColor },
                              )}`}
                            >
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      )}
    />
  );
}

type SearchBarProps = {
  changeHandeler: ChangeEventHandler<HTMLInputElement>;
};

function SearchBar({ changeHandeler }: SearchBarProps) {
  return (
    <div className="sticky top-0 z-10 flex items-center rounded-md bg-white/30 pl-3 backdrop-blur-sm">
      <HiMagnifyingGlass className="h-5 w-5" aria-hidden="true" />
      <input
        type="text"
        spellCheck="false"
        className="w-full bg-transparent p-2 text-xs text-gray-600 caret-orange-400 outline-none placeholder:text-gray-400"
        placeholder="Search..."
        onChange={changeHandeler}
      />
    </div>
  );
}
