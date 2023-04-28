import { Combobox, Transition } from "@headlessui/react";
import { HiChevronUpDown, HiCheck } from "react-icons/hi2";
import Fuse from "fuse.js";
import { Fragment, useMemo, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { removeDuplicated } from "../utils/removeDuplicated";
import { InputNameProps } from "./Form";

interface Props<T> {
  list: T[];
  name: keyof InputNameProps;
  labelKey: keyof T;
  imageKey?: keyof T;
  removeDuplicates?: boolean;
}

export default function KeyboardComboBox<T>({
  list,
  name,
  labelKey,
  imageKey,
  removeDuplicates,
}: Props<T>) {
  const { control } = useFormContext();
  const [query, setQuery] = useState("");
  const items = removeDuplicates
    ? useMemo(() => removeDuplicated(list, labelKey), [list])
    : list;
  const fuse = new Fuse(items, { includeScore: true, keys: [String(labelKey)] });
  const filteredItems =
    query === "" ? items : fuse.search(query).map(res => ({ ...res.item }));

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Combobox
          defaultValue={field.value}
          onChange={field.onChange}
          refName={field.name}
        >
          <div className="relative flex-1">
            <div className="relative flex min-w-full items-center">
              <Combobox.Input
                className="text-smoke-500 h-10 min-w-full rounded-full bg-white/20 py-2 pl-10 pr-10 caret-orange-500 saturate-150 backdrop-blur-md placeholder:text-white/40 focus:outline-none"
                placeholder="Search..."
                spellCheck="false"
                displayValue={(value: T) => String(value[labelKey])}
                onChange={event => setQuery(event.target.value)}
              />

              <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 text-black/70">
                <HiChevronUpDown className="h-5 w-5" aria-hidden="true" />
              </Combobox.Button>
            </div>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setQuery("")}
            >
              <Combobox.Options className="absolute z-10 mt-1 max-h-80 w-full overflow-auto rounded-xl bg-white/20 shadow-xl ring-1 ring-black ring-opacity-5 drop-shadow-xl saturate-150 backdrop-blur-md focus:outline-none sm:text-sm">
                {filteredItems.length === 0 && query !== "" ? (
                  <div className="relative cursor-default select-none px-4 py-2 text-white/70">
                    Nothing found
                  </div>
                ) : (
                  filteredItems.map((item, i) => (
                    <Combobox.Option
                      key={`${String(item[labelKey])}+ ${i}`}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 pl-10 pr-4 ${
                          active ? "bg-white/10 text-white/90" : "text-white/70"
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
                                src={String(item[imageKey]) || "/images/pingu.png"}
                              />
                            )}
                            <span
                              className={`block truncate ${
                                selected ? "font-extrabold text-white" : "font-normal"
                              }`}
                            >
                              {String(item[labelKey])}
                            </span>
                          </div>

                          {selected ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white/90">
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
