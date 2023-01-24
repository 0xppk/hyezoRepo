import Cookies from "js-cookie";
import { useCallback, useState } from "react";

export default function useCookie(name: string, defaultValue: string) {
  const [value, setValue] = useState<string | null>(() => {
    // 쿠키가 이미 있으면
    const cookie = Cookies.get(name);
    if (cookie) return cookie;
    // 쿠키가 기존에 없으면
    Cookies.set(name, defaultValue);
    return defaultValue;
  });

  const updateCookie = useCallback(
    (newValue: string, options: {}) => {
      Cookies.set(name, newValue, options);
      setValue(newValue);
    },
    [name],
  );

  const deleteCookie = useCallback(() => {
    Cookies.remove(name);
    setValue(null);
  }, [name]);

  return [value, updateCookie, deleteCookie] as const;
}
