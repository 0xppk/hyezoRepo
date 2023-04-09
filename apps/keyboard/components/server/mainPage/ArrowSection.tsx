import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import arrow from "~/public/svgs/arrow.svg";
import { images } from "./ImageSection";

type FourthSectionProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function FourthSection({ setPage }: FourthSectionProps) {
  return (
    <div className="interactable h-[30vh] border-t border-gray-900" data-type="link">
      <div className="grid h-full grid-cols-2 place-items-center">
        <div
          onClick={() =>
            setPage(prev => {
              if (prev === 0) return prev;
              return prev - 1;
            })
          }
          className="grid h-full w-full place-items-center border-r border-gray-900"
        >
          <Image
            src={arrow}
            alt="arrowing"
            width={50}
            height={50}
            className="-rotate-90 cursor-pointer duration-500 hover:scale-125 active:-translate-x-10 active:scale-150"
            priority
          />
        </div>
        <div
          onClick={() =>
            setPage(prev => {
              if (prev === images.length - 1) return prev;
              return prev + 1;
            })
          }
        >
          <Image
            src={arrow}
            alt="arrowing"
            width={50}
            height={50}
            className="rotate-90 cursor-pointer duration-500 hover:scale-125 active:translate-x-10 active:scale-150"
            priority
          />
        </div>
      </div>
    </div>
  );
}
