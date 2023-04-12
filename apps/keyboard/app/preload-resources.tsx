"use client";

import ReactDom from "react-dom";

export default function PreloadResources() {
  // @ts-ignore (until react 18.3 update)
  ReactDom.manifest("/manifest.json");

  return null;
}
