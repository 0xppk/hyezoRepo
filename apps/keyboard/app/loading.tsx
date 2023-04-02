import Image from "next/image";
import spinner from "~/public/svgs/spinner.svg";

export default function Loading() {
  return (
    <div className="grid h-screen place-items-center">
      <Image
        src={spinner}
        alt="loading"
        width={50}
        height={50}
        className="animate-spinner"
        priority
      />
    </div>
  );
}
