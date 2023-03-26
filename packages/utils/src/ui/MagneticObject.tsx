"use client";
import { ComponentProps, RefObject, useRef } from "react";
import { useRectSize } from "../hooks";

interface Props extends ComponentProps<"div"> {
  ref: RefObject<HTMLDivElement>;
}

export default function Magnet({ ref }: Props) {
  const size = useRectSize(ref);

  return (
    <div className="flex flex-col items-center justify-center">
      <div>{JSON.stringify(size)}</div>
      <div ref={ref} className="w-44"></div>
    </div>
  );
}
