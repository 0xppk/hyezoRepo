"use client";

import BlobMouseEffect from "@hyezo/ui/BlobMouseEffect";
import { ReactNode } from "react";
import Nav from "./nav";
import "./styles/tailwind.css";

type Props = {
  children: ReactNode;
  title: string;
};

export default function RootLayout({ children, title }: Props) {
  return (
    <html>
      <head>
        <title>{title}</title>
      </head>

      <body>
        <BlobMouseEffect />
        <header className="flex gap-5">
          <Nav href="/">Home</Nav>
          <Nav href="/slider">Slider</Nav>
          <Nav href="/masonry">Masonry</Nav>
          <Nav href="/about">About</Nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
