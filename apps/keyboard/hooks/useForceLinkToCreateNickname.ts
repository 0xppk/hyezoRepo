import { useEffect } from "react";
import { useUserSession } from "~/hooks";
import { useRouter } from "next/navigation";

export default function useForceLinkToCreateNickname() {
  const user = useUserSession();
  const router = useRouter();

  useEffect(() => {
    if (!user) router.push("/login");
    else if (!user?.nickname) router.push("/login/new-user");
  }, [user]);
}
