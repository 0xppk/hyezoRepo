import { InputSimple } from "@hyezo/ui";
import { Dispatch, SetStateAction } from "react";
import { type TItems } from "~/types/prisma";

type SearchItemInputProps = {
  allItems: TItems[];
  setSearchedItems: Dispatch<SetStateAction<TItems[]>>;
};

export default function SearchItemInput({
  allItems,
  setSearchedItems,
}: SearchItemInputProps) {
  return (
    <div className="flex items-center justify-center pb-14">
      <InputSimple<TItems, "author">
        data={allItems}
        setData={setSearchedItems}
        labelKeys={["title", "brandName", "layout", "nickname"]}
        placeholder="Search..."
        debounceTime={30}
        history
      />
    </div>
  );
}
