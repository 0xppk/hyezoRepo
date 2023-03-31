"use client";

import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { cva, VariantProps } from "cva";
import Fuse from "fuse.js";
import { ComponentProps, Fragment, useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "../utils";
import { removeDuplicated } from "../utils/removeDuplicated";

const comboStyles = cva("", {
  variants: {
    color: {
      twitter: "bg-twitter-100 text-twitter-900",
      orange: "bg-amber-100 text-amber-900",
      pink: "bg-rose-100 text-rose-900",
      emerald: "bg-emerald-100 text-emerald-900",
    },
    iconColor: {
      twitter: "text-twitter-600",
      orange: "text-amber-600",
      pink: "text-rose-600",
      emerald: "text-emerald-600",
    },
    width: {
      narrower: "w-44 max-w-xs",
      narrow: "w-52 max-w-sm",
      regular: "w-64 max-w-md",
      wide: "w-72 max-w-lg",
      wider: "w-80 max-w-xl",
    },
  },
});

type ComboStyleProps = VariantProps<typeof comboStyles>;

interface Props<T, K extends keyof T>
  extends Omit<ComboStyleProps, "iconColor">,
    Omit<ComponentProps<"li">, "color"> {
  list: T[];
  labelKey?: K;
  imageKey?: K;
  removeDuplicates?: boolean;
}

export default function ComboBox<T, K extends keyof T>({
  list,
  color = "twitter",
  width = "regular",
  labelKey = "name" as K,
  imageKey = "image" as K,
  removeDuplicates,
  ...props
}: Props<T, K>) {
  const { control } = useFormContext();
  const [query, setQuery] = useState("");
  const items = removeDuplicates
    ? useMemo(() => removeDuplicated(list, labelKey), [list])
    : list;
  const fuse = new Fuse(items, { includeScore: true, keys: [String(labelKey)] });
  const filteredItems =
    query === "" ? items : fuse.search(query).map(res => ({ ...res.item }));
  const iconColor = color;

  return (
    <Controller
      name="combo"
      control={control}
      // defaultValue={items[0]?.[labelKey]}
      render={({ field }) => (
        <Combobox
          defaultValue={field.value}
          onChange={field.onChange}
          refName={field.name}
        >
          <>
            <div className="relative mt-1 flex-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-4 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:outline-none focus:ring-0"
                  placeholder="Search..."
                  spellCheck="false"
                  displayValue={(item: string) => item}
                  onChange={event => setQuery(event.target.value)}
                />

                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                  <ChevronUpDownIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery("")}
              >
                <Combobox.Options
                  className={cn(
                    `absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ${props.className}`,
                  )}
                >
                  {filteredItems.length === 0 && query !== "" ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredItems.map((item, i) => (
                      <Combobox.Option
                        key={`${String(item[labelKey])}+ ${i}`}
                        className={({ active }) =>
                          `relative z-10 cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? comboStyles({ color }) : "text-gray-900"
                          }`
                        }
                        value={String(item[labelKey])}
                      >
                        {({ selected, active }) => (
                          <>
                            <div className="flex items-center gap-3">
                              <img
                                className="h-10 w-10 rounded-full"
                                src={String(item[imageKey])}
                              ></img>
                              <span
                                className={`block truncate ${
                                  selected ? "font-extrabold" : "font-normal"
                                }`}
                              >
                                {String(item[labelKey])}
                              </span>
                            </div>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${comboStyles(
                                  { iconColor },
                                )}`}
                              >
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </>
        </Combobox>
      )}
    />
  );
}
