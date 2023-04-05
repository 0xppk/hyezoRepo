import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import arrow from "~/public/svgs/arrow.svg";

type FourthSectionProps = {
  setPage: Dispatch<SetStateAction<number>>;
};

export default function FourthSection({ setPage }: FourthSectionProps) {
  return (
    <div className="h-[30vh] bg-orange-800">
      <div className="grid h-full grid-cols-2 place-items-center">
        <div
          onClick={() =>
            setPage(prev => {
              if (prev === 0) return 3;
              return prev - 1;
            })
          }
        >
          <Image
            src={arrow}
            alt="arrowing"
            width={50}
            height={50}
            className="-rotate-90 cursor-pointer duration-500 hover:scale-125"
            priority
          />
        </div>
        <div
          onClick={() =>
            setPage(prev => {
              if (prev === 3) return 0;
              return prev + 1;
            })
          }
        >
          <Image
            src={arrow}
            alt="arrowing"
            width={50}
            height={50}
            className="rotate-90 cursor-pointer duration-500 hover:scale-125"
            priority
          />
        </div>
      </div>
    </div>
  );
}
