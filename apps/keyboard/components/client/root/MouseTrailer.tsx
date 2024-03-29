import { useCallback, useRef } from "react";
import { useEventListener } from "@hyezo/hooks";
import { createTitle } from "~/lib/utils";
import { SplitWord } from "~/components/server";

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement>(null);

  const animateTrailer = useCallback(
    (e: MouseEvent, interacting: boolean) => {
      if (!trailerRef.current || !circleRef.current) return;

      const { clientX: x, clientY: y } = e;
      const offsetX = x - trailerRef.current.offsetWidth / 2,
        offsetY = y - trailerRef.current.offsetHeight / 2;

      const offX = x - circleRef.current.offsetWidth / 2,
        offY = y - circleRef.current.offsetHeight / 2;

      const keyframes = {
        transform: `translate(${offsetX}px, ${offsetY}px) scale(${
          interacting ? 0.05 : 1
        })`,
      };

      const keyframes2 = {
        transform: `translate(${offX}px, ${offY}px) scale(${interacting ? 1 : 0.05})`,
      };

      trailerRef.current.animate(keyframes, {
        duration: 250,
        fill: "forwards",
      });

      circleRef.current.animate(keyframes2, {
        duration: 350,
        fill: "forwards",
      });
    },
    [trailerRef, circleRef],
  );

  useEventListener("mousemove", e => {
    if (!trailerRef.current || !circleRef.current) return;

    if (isTargetElement(e.target)) {
      const interactable = e.target.closest(".interactable") as HTMLElement;
      const interacting = interactable !== null;

      animateTrailer(e, interacting);

      trailerRef.current.dataset.type = interacting ? interactable.dataset.type : "";
      circleRef.current.dataset.type = interacting ? interactable.dataset.type : "";
    }
  });

  return (
    <div className="hidden md:block">
      <div className="trailer" ref={trailerRef} />
      <div className="trailer-hover" ref={circleRef}>
        <div className="trailer-circle stack capitalize">
          {createTitle(SplitWord.MouseCircle, "hello keyboard﹒hello keyboard﹒")}
        </div>
      </div>
    </div>
  );
}

const isTargetElement = (element: unknown): element is HTMLElement | SVGElement => {
  return element instanceof HTMLElement || element instanceof SVGElement;
};
