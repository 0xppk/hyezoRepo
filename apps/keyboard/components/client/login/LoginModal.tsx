import { useRouter } from "next/navigation";
import { Icons } from "~/components/server";

type LoginModalProps = {
  children: ReactNode;
  className: string;
};

export default function LoginPage({ className, children }: LoginModalProps) {
  const router = useRouter();

  return (
    <div className={className}>
      <div className="modal rounded-xl">
        <div className="drop-shadow-blue rounded-xl bg-gray-900 px-8 py-6 sm:min-w-[22rem]">
          {children}
        </div>
        <div
          onClick={() => router.push("/")}
          className="absolute inset-x-0 -bottom-16 flex cursor-pointer items-center justify-center gap-3 text-xs"
        >
          <span>Go back</span>
          <Icons.back className="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
