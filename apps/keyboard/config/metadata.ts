import { type Metadata } from "next";
import { env } from "~/env.mjs";
import { TSiteConfig } from "~/types";

export const siteConfig: TSiteConfig = {
  title: "Hello, keyboard",
  name: "hyezoprk",
  description: "An open market for those who are custom keyboard mania",
  url: `${env.NEXT_PUBLIC_VERCEL_URL}`,
  links: {
    twitter: "https://twitter.com/hyezoprk",
    github: "https://github.com/hyezoprk",
  },
};

export const rootMetadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.title}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.title,
  metadataBase: new URL(siteConfig.url),
  manifest: "/manifest.json",
  creator: siteConfig.name,
  publisher: siteConfig.name,
  generator: "Next.js 13",
  keywords: ["커스텀 키보드", "키캡"],
  category: "keyboard open market",
  colorScheme: "dark",
  themeColor: [
    // { media: "(prefers-color-scheme: light)", color: "orange" },
    { media: "(prefers-color-scheme: dark)", color: "#041044" },
  ],
  viewport: {
    width: "device-width",
    height: "device-height",
    initialScale: 1,
    // maximumScale: 1,
    // minimumScale: 1,
    // userScalable: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "ko-KR": "/ko-KR",
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/assets/icon-192x192.png",
    shortcut: "/assets/icon-192x192.png",
    apple: "/assets/icon-192x192.png",
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: "/assets/icon-192x192.png",
    locale: "ko-KR",
    type: "website",
    countryName: "South Korea",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    site: siteConfig.name,
    creator: siteConfig.name,
    images: ["/assets/icon-384x384.png"],
  },
  appleWebApp: {
    title: siteConfig.title,
    statusBarStyle: "default",
    startupImage: ["/assets/icon-512x512.png"],
  },
  verification: {
    google: "google",
    yandex: "yandex",
    yahoo: "yahoo",
  },
  archives: ["/info"],
  assets: ["/assets"],
};
