import { useRef } from "react";
import { useEventListener } from "../hooks";

export default function MouseTrailEffect() {
  const trailerRef = useRef<HTMLDivElement>(null);
  const innerCursorRef = useRef<HTMLDivElement>(null);

  const animateTrailer = (e: PointerEvent, interacting: boolean) => {
    if (!trailerRef.current || !innerCursorRef.current) return;
    const { clientX: x, clientY: y } = e;
    const offsetX = x - trailerRef.current.offsetWidth / 2,
      offsetY = y - trailerRef.current.offsetHeight / 2;

    const keyframes = {
      transform: `translate(${offsetX}px, ${offsetY}px) scale(${interacting ? 4 : 1})`,
    };

    trailerRef.current.animate(keyframes, {
      duration: 800,
      fill: "forwards",
    });
  };

  useEventListener("pointermove", e => {
    if (!trailerRef.current || !innerCursorRef.current) return;

    const interactable = (e.target as HTMLElement).closest(
        ".interactable",
      ) as HTMLElement,
      interacting = interactable !== null;

    animateTrailer(e, interacting);

    trailerRef.current.dataset.type = interacting ? interactable.dataset.type : "";
    trailerRef.current.className = interacting
      ? getTrailerClassName(interactable.dataset.type)
      : getTrailerClassName();
    innerCursorRef.current.className = interacting
      ? getInnerCursorClassName(interactable.dataset.type)
      : getInnerCursorClassName();
  });

  return (
    <>
      <div className="trailer" ref={trailerRef}>
        <div className="trailer-cursor" ref={innerCursorRef}></div>
      </div>
    </>
  );
}

const getTrailerClassName = (type?: string) => {
  switch (type) {
    case "link":
      return "trailer bg-transparent border border-blue-800";
    case "description":
      return "trailer bg-transparent opacity-0";
    case "title":
      return "";
    case "arrow":
      return "";
    default:
      return "trailer bg-white";
  }
};

const getInnerCursorClassName = (type?: string) => {
  switch (type) {
    case "link":
      return "trailer-cursor bg-indigo-600/80 border border-indigo-700";
    case "description":
      return "trailer-cursor bg-indigo-600/80 border border-indigo-700";
    case "title":
      return "";
    case "arrow":
      return "";
    default:
      return "trailer-cursor bg-white";
  }
};
