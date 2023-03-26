"use client";

import { useEffect, useRef } from "react";

/**
 * Check Rendering Count
 * @returns {number} Rendering Count
 */
export default function useRenderCounter(): number {
  const count = useRef(1);

  useEffect(() => {
    count.current++;
  });

  return count.current;
}
