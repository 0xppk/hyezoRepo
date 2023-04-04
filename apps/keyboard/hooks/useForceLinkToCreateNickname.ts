import { useEffect } from "react";
import { useUserSession } from "~/hooks";
import { useRouter } from "next/navigation";

/**
 * 비상장치 !  
 * 가입은 했는데 닉네임은 안 만들고 나간 사람들을 위한 강제이동 훅
 */
export default function useForceLinkToCreateNickname() {
  const user = useUserSession();
  const router = useRouter();

  useEffect(() => {
    if (user && !user?.nickname) router.push("/login/new-user");
  }, [user]);
}
