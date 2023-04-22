import { InputSimple } from "@hyezo/ui";
import { Dispatch, SetStateAction } from "react";
import { type TItems } from "~/types/prisma";

type SearchItemInputProps = {
  allItems: TItems[];
  setSearchedItems: Dispatch<SetStateAction<TItems[] | undefined>>;
};

export default function SearchItemInput({
  allItems,
  setSearchedItems,
}: SearchItemInputProps) {
  if (!allItems) return <></>;

  return (
    <div className="flex items-center justify-center pb-5">
      <InputSimple<TItems>
        data={allItems}
        setData={setSearchedItems}
        labelKeys={["title", "brandName"]}
        placeholder="Search..."
        debounceTime={20}
      />
    </div>
  );
}
