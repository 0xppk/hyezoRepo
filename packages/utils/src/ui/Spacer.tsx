import { ReactNode } from "react";

type Props = {
  children: ReactNode;
  wrapperClassName?: string;
  textClassName?: string;
  borderClassName?: string;
};

export default function Spacer({
  wrapperClassName,
  textClassName,
  borderClassName,
  children,
}: Props) {
  return (
    <div className={`relative w-full ${wrapperClassName}`}>
      <div className="absolute inset-0 flex items-center">
        <span className={`w-full border-t ${borderClassName ?? "border-white"}`}></span>
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className={`px-2 ${textClassName ?? "bg-slate-900 text-gray-200"}`}>
          {children}
        </span>
      </div>
    </div>
  );
}
