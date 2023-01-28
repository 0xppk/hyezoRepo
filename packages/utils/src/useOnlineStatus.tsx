import { useState } from "react";
import useEventListener from "./useEventListener";

/** 
 * @returns {boolean} Checking online status.
 */
export default function useOnlineStatus(): boolean {
  const [online, setOnline] = useState(navigator.onLine);

  useEventListener("online", () => setOnline(navigator.onLine));
  useEventListener("offline", () => setOnline(navigator.onLine));

  return online;
}
