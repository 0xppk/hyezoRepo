"use client";
import { useAsync } from "./index";

const DEFAULT_OPTIONS = {
  headers: { "Content-Type": "application/json" },
};

export default function useFetch(url: string, dependencies: any[] = [], options = {}) {
  return useAsync(async () => {
    const res = await fetch(url, { ...DEFAULT_OPTIONS, ...options });
    const json = await res.json();
    return json;
  }, dependencies);
}
