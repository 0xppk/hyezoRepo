import Image from "next/image";

const images = [
  "/images/sample0.webp",
  "/images/sample2.webp",
  "/images/sample5.webp",
  "/images/sample4.webp",
];

type FirstSectionProps = {
  page: number;
};

export default function FirstSection({ page }: FirstSectionProps) {
  return (
    <div className="relative col-span-2 h-[60vh]">
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
