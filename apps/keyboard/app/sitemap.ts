import { MetadataRoute } from "next";
import { env } from "~/env.mjs";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.NEXT_PUBLIC_VERCEL_URL}`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_VERCEL_URL}/sell`,
      lastModified: new Date(),
    },
    {
      url: `${env.NEXT_PUBLIC_VERCEL_URL}/buy`,
      lastModified: new Date(),
    },
  ];
}
