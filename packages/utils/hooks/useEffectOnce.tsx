import { useEffect } from "react";

export default function useEffectOnce(callback: () => void) {
  useEffect(callback, [callback]);
}
