import { Combobox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import { cva, VariantProps } from "cva";
import Fuse from "fuse.js";
import { ComponentProps, Fragment, useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { cn } from "../utils";
import { removeDuplicated } from "../utils/removeDuplicated";
import { InputNameProps } from "./Form";

const comboStyles = cva("", {
  variants: {
    color: {
      twitter: "bg-twitter-100 text-twitter-900",
      orange: "bg-amber-100 text-amber-900",
      pink: "bg-rose-100 text-rose-900",
      emerald: "bg-emerald-100 text-emerald-900",
      darkNavy: "bg-stripes-indigo text-white",
    },
    iconColor: {
      twitter: "text-twitter-600",
      orange: "text-amber-600",
      pink: "text-rose-600",
      emerald: "text-emerald-600",
      darkNavy: "text-white",
    },
    width: {
      narrower: "max-w-xs",
      narrow: "max-w-sm",
      regular: "max-w-md",
      wide: "max-w-lg",
      wider: "max-w-xl",
    },
  },
});

type ComboStyleProps = VariantProps<typeof comboStyles>;

interface Props<T>
  extends Omit<ComboStyleProps, "iconColor">,
    Omit<ComponentProps<"li">, "color"> {
  list: T[];
  name: keyof InputNameProps;
  labelKey: keyof T;
  imageKey?: keyof T;
  removeDuplicates?: boolean;
}

export default function ComboBox<T>({
  list,
  name,
  color = "twitter",
  width = "regular",
  labelKey,
  imageKey,
  removeDuplicates,
  ...props
}: Props<T>) {
  const { control } = useFormContext();
  const [query, setQuery] = useState("");
  const items = removeDuplicates
    ? useMemo(() => removeDuplicated(list, labelKey), [list])
    : list;
  const fuse = new Fuse(items, {
    includeScore: true,
    threshold: 0.3,
    keys: [String(labelKey)],
  });
  const filteredItems =
    query === "" ? items : fuse.search(query).map(res => ({ ...res.item }));
  const iconColor = color;

  return (
    <Controller
      name={name}
      control={control}
      // defaultValue={items[0]?.[labelKey]}
      render={({ field }) => (
        <Combobox
          defaultValue={field.value}
          onChange={field.onChange}
          refName={field.name}
        >
          <div className="relative flex-1">
            <div
              className={cn(
                `relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left text-xs shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 ${comboStyles(
                  { width },
                )} ${
                  color === "darkNavy" &&
                  "rounded-none border-b border-gray-800 bg-gray-900 hover:border-gray-700/70"
                }`,
              )}
            >
              <Combobox.Input
                className={cn(
                  `w-full rounded-lg border-none py-2 pl-3 text-xs text-gray-900 focus:outline-none focus:ring-0 ${comboStyles(
                    { width },
                  )} ${color === "darkNavy" && "bg-gray-900 text-white/80"}`,
                )}
                placeholder="Search..."
                spellCheck="false"
                displayValue={(value: T) => String(value[labelKey])}
                onChange={event => setQuery(event.target.value)}
              />

              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
                <HiChevronUpDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
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
                  `absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-md bg-white shadow-xl ring-1 ring-black ring-opacity-5 drop-shadow-xl backdrop-blur-sm focus:outline-none sm:text-sm ${
                    props.className
                  } ${color === "darkNavy" && "bg-gray-900/90 text-white/80"}`,
                )}
              >
                {filteredItems.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                    Nothing found.
                  </div>
                ) : (
                  filteredItems.map((item, i) => (
                    <Combobox.Option
                      key={`${String(item[labelKey])}+ ${i}`}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active
                            ? comboStyles({ color })
                            : color === "darkNavy"
                            ? "bg-gray-900 text-white/80"
                            : "text-gray-900"
                        }`
                      }
                      value={item}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center gap-3">
                            {imageKey && (
                              <img
                                className="h-10 w-10 rounded-full"
                                src={String(item[imageKey])}
                              ></img>
                            )}
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
                              <HiCheck className="h-5 w-5" aria-hidden="true" />
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
        </Combobox>
      )}
    />
  );
}
