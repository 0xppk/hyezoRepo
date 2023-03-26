"use client";

import { useEventListener } from "@hyezo/hooks/index";
import { cn } from "@hyezo/utils";
import { Anonymous_Pro as font } from "next/font/google";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { createTitle, magnet } from "~/lib/utils";
import { SplitWord } from "~/components";

const codeFont = font({
  subsets: ["latin"],
  weight: "400",
});

export default function Opening() {
  const preRef = useRef(null);
  const [isOpen, setIsOpen] = useState(true);
  const router = useRouter();

  useEventListener("pointermove", e => {
    magnet(e, preRef);
  });

  return (
    <div
      className={cn(
        `bg-mix fixed inset-0 flex items-center justify-center duration-500 ${
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
