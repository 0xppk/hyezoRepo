import { useSearchParams } from "next/navigation";
import { useCallback } from "react";

export default function useQueryString() {
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      if (!searchParams) return;
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      // func && func();

      return params.toString();
    },
    [searchParams],
  );

  return { createQueryString };
}
