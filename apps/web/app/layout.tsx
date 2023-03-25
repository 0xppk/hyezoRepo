import { ReactNode } from "react";
import Nav from "./nav";
import "./styles/tailwind.css";
import type { Metadata } from "next";

type Props = {
  children: ReactNode;
  title: string;
};

export const metadata: Metadata = {
  openGraph: {
    description: "The React Framework for the Web",
    url: "https://nextjs.org",
    siteName: "Next.js",
    images: [
      {
        url: "https://nextjs.org/og.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }: Props) {
  return (
    <html>
      <head></head>

      <body>
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
