import { useEffect, useRef } from "react";

type GridCardProps = {
  data?: {
    id: string;
    title: string;
    price: number;
    layout?: string | null;
    color?: string | null;
    message?: string | null;
    category: "BUY" | "SELL";
    status: "ING" | "DONE" | "HOLD";
  }[];
};

export default function GridCard({ data }: GridCardProps) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current?.children) return;

    const handleOnMouseMove = (e: PointerEvent) => {
      const { currentTarget: target } = e;
      if (target instanceof HTMLDivElement) {
        const rect = target.getBoundingClientRect(),
          y = e.clientY - rect.top,
          x = e.clientX - rect.left;
        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    for (const card of gridRef.current.children) {
      if (card instanceof HTMLDivElement) {
        card.onpointermove = e => {
          handleOnMouseMove(e);
        };
      }
    }
  }, [gridRef]);

  return (
    <div className="gridcards text-white" ref={gridRef}>
      {data?.map(card => (
        <div className="gridcard" key={card.id}>
          <div className="gridcard_content flex items-end justify-between">
            <div className="flex flex-col pb-2 pl-3">
              <div className="flex gap-4 pb-1">
                <p>{card.layout}</p>
                <p>{card.color}</p>
              </div>
              <p className="text-2xl font-bold">{card.title}</p>
            </div>
            <div className="flex flex-col items-center pb-2 pr-3">
              <p className="pb-1 text-xl font-bold">{card.price}</p>
              <div className="bg-white px-5 py-1 text-black">{card.status}</div>
            </div>
          </div>
        </div>
      ))}

      <div className="gridcard">
        <div className="gridcard_content flex items-end justify-between">
          <div className="flex flex-col pb-2 pl-3">
            <div className="flex gap-4 pb-1">
              <p></p>
              <p></p>
            </div>
            <p className="text-2xl font-bold"></p>
          </div>
          <div className="flex flex-col items-center pb-2 pr-3">
            <p className="pb-1 text-xl font-bold"></p>
            <div className="bg-white text-black"></div>
          </div>
        </div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
      <div className="gridcard">
        <div className="gridcard_content"></div>
      </div>
    </div>
  );
}
