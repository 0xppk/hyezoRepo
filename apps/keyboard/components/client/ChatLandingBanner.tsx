import { Anonymous_Pro as font } from "next/font/google";
import { useRef, useState } from "react";
import { SplitWord } from "~/components/server";
import { useMagneticBanner } from "~/hooks";
import { createTitle } from "~/lib/utils";

const codeFont = font({
  subsets: ["latin"],
  weight: "700",
});

export default function ChatLandingBanner() {
  const [isOpen, setIsOpen] = useState(true);
  const preRef = useRef<HTMLPreElement>(null);

  useMagneticBanner(preRef);

  return (
    <div
      className={`bg-mix fixed inset-0 hidden h-screen place-items-center duration-500 lg:grid ${
        isOpen ? "z-10 opacity-100" : "-z-10 opacity-0"
      }`}
    >
      <pre
        ref={preRef}
        tabIndex={0}
        className="cursor-pointer"
        onClick={() => setIsOpen(false)}
      >
        <code spellCheck={false} className={`${codeFont.className}`}>
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
