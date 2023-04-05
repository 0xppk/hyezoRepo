"use client";

import { useState } from "react";
import {
  ImageSection,
  DescriptionSection,
  TitleSection,
  ArrowSection,
} from "~/components/server/mainPage";
import { AllBrandData } from "~/types/prisma";

type MainPageGridProps = {
  brands: AllBrandData;
};

export default function MainPageGrid({ brands }: MainPageGridProps) {
  const [page, setPage] = useState(0);

  return (
    <>
      <ImageSection page={page} />
      <DescriptionSection />
      <TitleSection brands={brands} page={page} />
      <ArrowSection setPage={setPage} />
    </>
  );
}
