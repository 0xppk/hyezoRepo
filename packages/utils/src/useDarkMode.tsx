import { useEffect } from "react";
import useMediaQuery from "./useMediaQuery";
import { useLocalStorage } from "./useStorage";

/**
 * @example 컴퍼넌트 안에서 예시
 * const [darkMode, setDarkMode] = useDarkMode()
 *
 * return (
 *   <button onClick={()=> setDarkMode(prevDarkMode => !prevDarkMode)}>
 * 다크모드
 * </button>
 * )
 */
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage<boolean | undefined>("useDarkMode", undefined);
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const enabled = darkMode ?? prefersDarkMode;

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled);
  }, [enabled]);

  return [enabled, setDarkMode] as const;
}
