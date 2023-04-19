import { InputSimple } from "@hyezo/ui";
import { Dispatch, SetStateAction } from "react";

type SearchItemInputProps = {
  allPostsData: TAllItems[];
  setSearchedItems: Dispatch<SetStateAction<TAllItems[] | undefined>>;
};

export default function SearchItemInput({
  allPostsData,
  setSearchedItems,
}: SearchItemInputProps) {
  if (!allPostsData) return <></>;

  return (
    <div className="flex items-center justify-center pb-5">
      <InputSimple<TAllItems>
        data={allPostsData}
        setData={setSearchedItems}
        labelKeys={["title", "brandName"]}
        placeholder="Search..."
        debounceTime={20}
      />
    </div>
  );
}
