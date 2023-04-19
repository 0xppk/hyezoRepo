import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import arrow from "~/public/svgs/arrow.svg";
import { images } from "./ImageSection";

type FourthSectionProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function FourthSection({ setPage }: FourthSectionProps) {
  return (
    <div
      className="interactable col-span-2 h-40 border-b border-t border-gray-900 sm:h-60 lg:col-span-1 lg:h-[30vh]"
      data-type="circle"
    >
      <div className="grid h-full grid-cols-2 place-items-center">
        <Image
          src={arrow}
          alt="arrowing"
          width={35}
          height={35}
          className="-rotate-90 cursor-pointer duration-500 hover:scale-125 active:-translate-x-10 active:scale-150"
          onClick={() =>
            setPage(prev => {
              if (prev === 0) return prev;
              return prev - 1;
            })
          }
          priority
        />
        <Image
          src={arrow}
          alt="arrowing"
          width={35}
          height={35}
          className="rotate-90 cursor-pointer duration-500 hover:scale-125 active:translate-x-10 active:scale-150"
          priority
          onClick={() =>
            setPage(prev => {
              if (prev === images.length - 1) return prev;
              return prev + 1;
            })
          }
        />
      </div>
    </div>
  );
}
