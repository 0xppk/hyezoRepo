import { useCallback, useRef } from "react";
import { useEventListener } from "@hyezo/hooks";
import { createTitle } from "~/lib/utils";
import { SplitWord } from "../server";

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);

  const animateTrailer = useCallback(
    (e: PointerEvent, interacting: boolean) => {
      if (!trailerRef.current) return;
      const { clientX: x, clientY: y } = e;
      const offsetX = x - trailerRef.current.offsetWidth / 2,
        offsetY = y - trailerRef.current.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${offsetX}px, ${offsetY}px) scale(${
          interacting ? 3 : 1
        })`,
      };

      trailerRef.current.animate(keyframes, {
        duration: 350,
        fill: "forwards",
      });
    },
    [trailerRef],
  );

  useEventListener("pointermove", e => {
    if (!trailerRef.current) return;

    if (isHTMLElement(e.target)) {
      const interactable = e.target.closest(".interactable") as HTMLElement;
      const interacting = interactable !== null;

      animateTrailer(e, interacting);

      trailerRef.current.dataset.type = interacting ? interactable.dataset.type : "";
    }
  });

  return (
    <>
      <div className="trailer" ref={trailerRef}>
        <div className="trailer-cursor">
          <div className="trailer-circle stack capitalize">
            {createTitle(SplitWord.MouseCircle, "hello keyboard﹒hello keyboard﹒")}
          </div>
        </div>
      </div>
    </>
  );
}

const isHTMLElement = (element: unknown): element is HTMLElement | SVGElement => {
  return element instanceof HTMLElement || element instanceof SVGElement;
};
