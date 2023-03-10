import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};
export default function MasonryLayout({ children }: Props) {
  return (
    <main>
      <div className="relative flex w-full gap-5 px-5 py-20">{children}</div>
    </main>
  );
}
