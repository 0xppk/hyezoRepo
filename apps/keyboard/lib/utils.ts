import { RefObject } from "react";
import { env } from "~/env.mjs";

export const createTitle = (
  func: (text: string, index: number) => JSX.Element,
  text: string,
) => {
  const splitWords = text.split("");
  const reviveSpace = splitWords.reduce((acc: string[], each) => {
    if (each === " ") return [...acc, "\u00A0"];
    return [...acc, each];
  }, []);
  return reviveSpace.map(func);
};

export const magnet = <T extends HTMLElement>(e: PointerEvent, ref: RefObject<T>) => {
  const { clientX: x, clientY: y } = e,
    middleX = globalThis.innerWidth / 2,
    middleY = globalThis.innerHeight / 2,
    offsetX = ((x - middleX) / middleX) * 45,
    offsetY = ((y - middleY) / middleY) * 45 * -1;

  ref.current?.style.setProperty("--rotateX", offsetY + "deg");
  ref.current?.style.setProperty("--rotateY", offsetX + "deg");
};

export const fetcher = async <T>(endpoint: string, config?: RequestInit) => {
  const data = (await await fetch(
    `${env.NEXT_PUBLIC_VERCEL_URL}${endpoint}`,
    config,
  ).then(res => res.json())) as T;

  return data;
};

export const fetchPost = async <T>(
  endpoint: string,
  body?: {
    body: BodyInit | undefined | null;
    headers?: HeadersInit | undefined;
  },
): Promise<T> => {
  return (await fetch(`${env.NEXT_PUBLIC_VERCEL_URL}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...body,
  }).then(res => res.json())) as T;
};

export const reloadSession = () => {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
};
