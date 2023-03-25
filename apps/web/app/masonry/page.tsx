"use client";
import { useMediaQuery } from "@hyezo/hooks";
import { images } from "./images";
import MasonryGrid from "@hyezo/ui/MasonryGrid";

export default function Page() {
  const isSmall = useMediaQuery("(max-width: 470px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");

  return <MasonryGrid columns={isSmall ? 1 : isMedium ? 2 : 4} src={images} />;
}
