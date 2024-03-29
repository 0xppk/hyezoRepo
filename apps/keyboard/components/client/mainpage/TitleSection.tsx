import { Text } from "@hyezo/ui";
import { useState } from "react";
import { Icons } from "~/components/server";
import { MainPageModal } from ".";

type ThirdSectionProps = {
  page: number;
};

export default function ThirdSection({ page }: ThirdSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalChanger, setModalChanger] = useState<"search" | "post" | undefined>();
  const openModal = (type: "search" | "post") => {
    setIsOpen(true);
    setModalChanger(type);
  };

  return (
    <div className="col-span-2 h-[30vh] border-b border-gray-900">
      <div className="grid h-full grid-cols-3 place-items-center">
        <div className="stack col-span-2">
          <ThirdSection.TitleSlider page={page} />
        </div>
        <div
          className="interactable grid h-full w-full grid-rows-2 place-items-center border-x border-gray-900"
          data-type="circle"
        >
          <div className="grid h-full w-full place-items-center border-b border-gray-900">
            <Icons.search
              className="h-10 w-10 cursor-pointer"
              onClick={() => openModal("search")}
            />
          </div>
          <div>
            <Icons.note
              className="h-10 w-10 cursor-pointer"
              onClick={() => openModal("post")}
            />
          </div>
        </div>
      </div>
      <MainPageModal isOpen={isOpen} setIsOpen={setIsOpen} as={modalChanger} />
    </div>
  );
}

const titles = ["intro", "selling", "buying", "chatting"];
ThirdSection.TitleSlider = ({ page }: { page: number }) => {
  return (
    <>
      {titles.map((title, i) => (
        <Text
          key={title}
          variant="3xl/semibold"
          className={`font-point cursor-default uppercase duration-500 ${
            page === i ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
          }`}
        >
          {title}
        </Text>
      ))}
    </>
  );
};
