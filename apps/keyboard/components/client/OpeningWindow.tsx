"use client";

import { cn } from "@hyezo/utils";
import { Anonymous_Pro as font } from "next/font/google";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { SplitWord } from "~/components/server";
import { useForceLinkToCreateNickname, useMagneticBanner } from "~/hooks";
import { createTitle } from "~/lib/utils";

const codeFont = font({
  subsets: ["latin"],
  weight: "400",
});

export default function OpeningWindow() {
  const [isOpen, setIsOpen] = useState(true);
  const preRef = useRef<HTMLPreElement>(null);
  const router = useRouter();

  useForceLinkToCreateNickname();
  useMagneticBanner(preRef);

  return (
    <div
      className={cn(
        `fixed inset-0 flex items-center justify-center overflow-hidden duration-500 ${
          isOpen ? "z-10 opacity-100" : "-z-10 opacity-0"
        }`,
      )}
    >
      <pre
        ref={preRef}
        tabIndex={0}
        className="cursor-pointer"
        onClick={() => {
          setIsOpen(false);
          router.push("/login");
        }}
      >
        <code spellCheck={false} className={`font-semibold ${codeFont.className}`}>
          <span className="selector title fancy">
            {createTitle(SplitWord.Opening, ".hello-keyboard {")}
          </span>
          <br />
          <span className="property title">&nbsp; custom:</span>
          <span className="puntuation title"> keyboard;</span>
          <p className="punctuation title">&#125;</p>
        </code>
      </pre>
    </div>
  );
}
