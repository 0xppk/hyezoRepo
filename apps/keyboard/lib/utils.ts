import { RefObject } from "react";

export const createTitle = (
  func: (text: string, index: number) => JSX.Element,
  text: string,
) => text.split("").map(func);

export const magnet = (e: PointerEvent, ref: RefObject<HTMLPreElement>) => {
  const { clientX: x, clientY: y } = e,
    middleX = globalThis.innerWidth / 2,
    middleY = globalThis.innerHeight / 2,
    offsetX = ((x - middleX) / middleX) * 45,
    offsetY = ((y - middleY) / middleY) * 45 * -1;

  ref.current?.style.setProperty("--rotateX", offsetY + "deg");
  ref.current?.style.setProperty("--rotateY", offsetX + "deg");
};
