import Image from "next/image";
import { images } from "~/config/images";

type FirstSectionProps = {
  page: number;
};

export default function FirstSection({ page }: FirstSectionProps) {
  return (
    <div className="relative col-span-2 h-[40vh] border-r border-transparent lg:h-[60vh]">
      {images.map((image, i) => (
        <Image
          src={image}
          alt="슬라이더 이미지"
          key={image}
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
