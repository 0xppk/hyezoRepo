import { useRef } from "react";
import { useEventListener } from "@hyezo/hooks";

export default function MouseTrailer() {
  const trailerRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);

  const animateTrailer = (e: PointerEvent, interacting: boolean) => {
    if (!trailerRef.current || !innerCursorRef.current) return;
    const { clientX: x, clientY: y } = e;
    const offsetX = x - trailerRef.current.offsetWidth / 2,
      offsetY = y - trailerRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${offsetX}px, ${offsetY}px) scale(${
        interacting ? 3 : 1
      })`,
    };

    trailerRef.current.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  useEventListener("pointermove", e => {
    if (!trailerRef.current || !innerCursorRef.current) return;

    if (isHTMLElement(e.target)) {
      const interactable = e.target.closest(".interactable") as HTMLElement;
      const interacting = interactable !== null;

      animateTrailer(e, interacting);

      trailerRef.current.dataset.type = interacting ? interactable.dataset.type : "";
      trailerRef.current.className = interacting
        ? getTrailerClassName(interactable.dataset.type)
        : getTrailerClassName();
    }
  });

  return (
    <>
      <div className="trailer" ref={trailerRef}>
        <div className="trailer-cursor" ref={innerCursorRef}></div>
      </div>
    </>
  );
}

const isHTMLElement = (element: unknown): element is HTMLElement => {
  return element instanceof HTMLElement;
};

const getTrailerClassName = (type?: string) => {
  switch (type) {
    case "link":
      return "trailer";
    default:
      return "trailer";
  }
};
