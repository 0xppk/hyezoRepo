import { ImageResponse } from "next/server";

export const alt = "Hello, keyboard";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function og() {
  return new ImageResponse(
    <div className="grid h-full w-full place-items-center bg-white text-xs">{alt}</div>,
    size,
  );
}
