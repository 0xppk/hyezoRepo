import { InputSimple } from "@hyezo/ui";
import { Dispatch, SetStateAction } from "react";
import { useLoadAllPosts } from "~/hooks";

type SearchItemsProps = {
  setSearchedItems: Dispatch<SetStateAction<AllSellingData | undefined>>;
};

export default function SearchItems({ setSearchedItems }: SearchItemsProps) {
  const { allPostsData } = useLoadAllPosts({ category: "SELL" });

  const onSubmit = (value: string) => {
    const filteredData = allPostsData?.filter(
      post =>
        post.title.startsWith(value) ||
        post.brandName.startsWith(value) ||
        post.layout?.startsWith(value),
    );

    setSearchedItems(filteredData);
  };

  return (
    <div className="flex items-center justify-center pb-5">
      <InputSimple submitAction={onSubmit} placeholder="Search..." />
    </div>
  );
}
