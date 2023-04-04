"use client";
import Image, { type ImageProps } from "next/image";
import { ReactNode, useRef } from "react";
import { useEventListener } from "../hooks";

type SliderProps = {
  children: ReactNode;
};

export default function Slider({ children }: SliderProps) {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEventListener("mousemove", e => {
    if (!sliderRef.current || sliderRef.current.dataset.mouseDownAt === "0") return;

    if (
      sliderRef.current.dataset.mouseDownAt &&
      sliderRef.current.dataset.prevPercentage
    ) {
      const mouseDelta = parseFloat(sliderRef.current.dataset.mouseDownAt) - e.clientX,
        maxDelta = globalThis.innerWidth / 2;

      const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentage = Math.min(
          Math.max(
            parseFloat(sliderRef.current.dataset.prevPercentage) + percentage,
            -100,
          ),
          0,
        );

      sliderRef.current.dataset.percentage = String(nextPercentage);
      sliderRef.current.animate(
        {
          transform: `translate(${nextPercentage}%, -50%)`,
        },
        { duration: 2000, fill: "forwards" },
      );

      for (const image of sliderRef.current.children) {
        image?.animate(
          {
            objectPosition: `${100 + nextPercentage}% center`,
          },
          { duration: 2000, fill: "forwards" },
        );
      }
    }
  });

  useEventListener("mousedown", e => {
    if (sliderRef.current !== null) {
      sliderRef.current.dataset.mouseDownAt = String(e.clientX);
    }
  });

  useEventListener("mouseup", e => {
    if (sliderRef.current !== null) {
      sliderRef.current.dataset.mouseDownAt = "0";
      sliderRef.current.dataset.prevPercentage = sliderRef.current.dataset.percentage;
    }
  });

  return (
    <div
      ref={sliderRef}
      className="slider"
      data-mouse-down-at="0"
      data-prev-percentage="0"
    >
      {children}
    </div>
  );
}

Slider.image = ({ src, ...props }: ImageProps) => {
  return (
    <Image
      src={src}
      draggable="false"
      className={`slider-image select-none ${props.className}`}
      {...props}
    />
  );
};
