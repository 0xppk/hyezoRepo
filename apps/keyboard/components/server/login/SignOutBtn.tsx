import { signOut } from "next-auth/react";

type SignOutProps = {
  children: ReactNode;
  className?: string;
};

export default function SignOutBtn({ className, children }: SignOutProps) {
  return (
    <button onClick={() => signOut()} className={className}>
      {children}
    </button>
  );
}
