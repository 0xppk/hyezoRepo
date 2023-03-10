"use client";
import { Slider } from "@hyezo/ui";
import { images } from "./images";

export default function Page() {
  return (
    <Slider>
      {images.map(image => (
        <Slider.image key={image} src={image} />
      ))}
    </Slider>
  );
}
