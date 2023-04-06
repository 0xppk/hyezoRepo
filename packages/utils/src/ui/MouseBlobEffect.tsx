"use client";

import { useRef } from "react";
import { useEventListener } from "../hooks";

export default function BlobMouseEffect() {
  const blobRef = useRef<HTMLDivElement>(null);

  useEventListener("pointermove", e => {
    const { pageX, pageY } = e;

    if (blobRef.current !== null) {
      blobRef.current?.animate(
        {
          left: `${pageX}px`,
          top: `${pageY}px`,
        },
        { duration: 2000, fill: "forwards" },
      );
    }
  });

  return (
    <>
      <div className="bg-blur" />
      <div ref={blobRef} className="blob animate-rot" />
    </>
  );
}
