import Image from "next/image";
import flicker from "~/public/download.svg";

export default function Loading() {
  return (
    <div className="grid h-screen place-items-center">
      <Image
        src={flicker}
        alt="loading"
        width={50}
        height={50}
        className="flicker"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNctWXLSQAG/wLdU4e2YwAAAABJRU5ErkJggg=="
        priority
      />
    </div>
  );
}
