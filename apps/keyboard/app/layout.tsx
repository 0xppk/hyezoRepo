import { Analytics } from "@vercel/analytics/react";
import { type Metadata } from "next";
import { MouseTrailer, Subscriber } from "~/components/client";
import { NavBar } from "~/components/server";
import { rootMetadata } from "~/config/metadata";
import { RootProviders } from "~/lib/contexts";
import "~/styles/tailwind.css";

export const metadata: Metadata = {
  ...rootMetadata,
};

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en">
      <body
        className={`bg-mix cursor-default ${
          process.env.NODE_ENV === "development" && "debug-screens"
        }`}
      >
        <div className="flex flex-col">
          <RootProviders>
            <NavBar className="flex h-[10vh] min-w-full flex-row items-center border-b border-gray-900" />
            <main className="grid w-full lg:grid-cols-3">{children}</main>
            <Subscriber />
            <MouseTrailer />
            <Analytics />
          </RootProviders>
        </div>
      </body>
    </html>
  );
}
