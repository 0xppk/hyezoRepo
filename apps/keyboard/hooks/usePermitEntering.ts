import { useState, useEffect } from "react";
import { useUserSession } from "~/hooks";

export default function usePermitEntering() {
  // const user = useUserSession();
  const [isEnter, setIsEnter] = useState(false);

  useEffect(() => {
    setIsEnter(true);
  }, []);

  return [isEnter, setIsEnter] as const;
}
