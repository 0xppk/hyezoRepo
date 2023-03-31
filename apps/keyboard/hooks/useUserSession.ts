import { useSession } from "next-auth/react";

export default function useUserSession() {
  const { data } = useSession();

  return data?.user;
}
