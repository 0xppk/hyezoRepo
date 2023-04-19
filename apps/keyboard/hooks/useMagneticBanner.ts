import { RefObject } from "react";
import { magnet } from "~/lib/utils";
import { useEventListener } from "@hyezo/hooks";

export default function useMagneticBanner<T extends HTMLElement>(ref: RefObject<T>) {
  useEventListener("pointermove", e => magnet(e, ref));
}
