import { cache, RefObject } from "react";

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
  const data = (await await fetch(`${devOrProd}${endpoint}`, config).then(res =>
    res.json(),
  )) as T;

  return data;
};

export const fetchPost = async (
  endpoint: string,
  body: { body: BodyInit | undefined | null },
) => {
  return await fetch(`${devOrProd}${endpoint}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    ...body,
  }).then(res => res.json());
};

export const devOrProd =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://hello-keyboard.vercel.app";

export const cacheFetcher = cache(async <T>(endpoint: string) => {
  const res = (await await fetch(`${devOrProd}${endpoint}`).then(res => res.json())) as T;
  return res;
});

export const reloadSession = () => {
  const event = new Event("visibilitychange");
  document.dispatchEvent(event);
};
