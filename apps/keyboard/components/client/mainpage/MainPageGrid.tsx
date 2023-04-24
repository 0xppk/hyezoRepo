import { useEffect, useState } from "react";
import { images } from "~/config/images";
import { ArrowSection, DescriptionSection, ImageSection, TitleSection } from ".";

export default function MainPageGrid() {
  const [page, setPage] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setPage(prev => {
        if (prev === images.length - 1) return 0;
        return prev + 1;
      });
    }, 5000);
  }, []);

  return (
    <>
      <ImageSection page={page} />
      <DescriptionSection />
      <TitleSection page={page} />
      <ArrowSection setPage={setPage} />
    </>
  );
}
