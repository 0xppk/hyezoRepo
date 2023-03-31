import { useState, useEffect } from "react";
import { useUserSession } from "~/hooks";

export default function usePermitEntering() {
  const user = useUserSession();
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    if (!user?.nickname) setIsEnter(true);
  }, [user]);

  return [isEnter, setIsEnter] as const;
}
