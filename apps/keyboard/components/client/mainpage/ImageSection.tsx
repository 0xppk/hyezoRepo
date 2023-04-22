import Image from "next/image";
import { images } from "~/config/images";

type FirstSectionProps = {
  page: number;
};

export default function FirstSection({ page }: FirstSectionProps) {
  return (
    <div className="relative col-span-2 h-60 border-r border-transparent sm:h-96 lg:h-[60vh]">
      {images.map((e, i) => (
        <Image
          src={e}
          alt="image"
          key={e}
          priority
          fill
          className={`object-cover duration-1000 ${
            page === i ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </div>
  );
}
