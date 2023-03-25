"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [query, setQuery] = useState<string>("ssss");

  return (
    <>
      <div className="flex p-5">
        <div className="m-3 basis-1/4 overflow-hidden rounded-2xl">
          <Image src="/images/other/dive.png" alt="profile" width={9999} height={9999} />
        </div>
        <div className="basis-3/4">
          <h2>박혜조</h2>
          <p>안녕하세요. 제 이름은 박광훈입니다.</p>
          <input
            type="text"
            className="text-black"
            onChange={e => {
              setQuery(e.target.value);
            }}
          />
          <h1>{query}</h1>
        </div>
      </div>
    </>
  );
}
