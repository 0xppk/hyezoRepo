import { useEffect } from "react";
import { useUserSession } from "~/lib/contexts";
import { useRouter } from "next/navigation";

/**
 * 로그인 후 닉네임 안 만들고 나간 사람들을 위한 강제이동 훅
 */
export default function useForceLinkToCreateNickname() {
  const { user } = useUserSession();
  const router = useRouter();

  useEffect(() => {
    if (user && !user?.nickname) router.push("/login/new-user");
  }, [user]);
}
