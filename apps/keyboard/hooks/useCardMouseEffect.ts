import { RefObject, useEffect } from "react";

const effectOnMouseMove = (e: PointerEvent) => {
  const { currentTarget: target } = e;
  if (target instanceof HTMLDivElement) {
    const rect = target.getBoundingClientRect(),
      y = e.clientY - rect.top,
      x = e.clientX - rect.left;
    target.style.setProperty("--mouse-x", `${x}px`);
    target.style.setProperty("--mouse-y", `${y}px`);
  }
};

export default function useCardMouseEffect(gridRef: RefObject<HTMLDivElement>) {
  useEffect(() => {
    if (!gridRef.current?.children) return;
    for (const card of gridRef.current.children)
      if (card instanceof HTMLDivElement)
        card.onpointermove = e => {
          effectOnMouseMove(e);
        };
  }, [gridRef]);
}
