import { RefObject } from "react";

export const createTitle = (
  func: (text: string, index: number) => JSX.Element,
  text: string,
) => text.split("").map(func);

export const magnet = <T extends HTMLElement>(e: PointerEvent, ref: RefObject<T>) => {
  const { clientX: x, clientY: y } = e,
    middleX = globalThis.innerWidth / 2,
    middleY = globalThis.innerHeight / 2,
    offsetX = ((x - middleX) / middleX) * 45,
    offsetY = ((y - middleY) / middleY) * 45 * -1;

  ref.current?.style.setProperty("--rotateX", offsetY + "deg");
  ref.current?.style.setProperty("--rotateY", offsetX + "deg");
};

export const fetcher = async <T>(endpoint: string) => {
  const res = (await await fetch(endpoint).then(res => res.json())) as T;
  return res;
};

export const fetchPost = async (
  endpoint: string,
  body: { body: BodyInit | undefined | null },
) => {
  return await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...body,
  }).then(res => res.json());
};
