/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: !isProduction,
});

const nextConfig = withPWA({
  experimental: {
    appDir: true,
    outputFileTracingIgnores: [
      "node_modules/.pnpm/@swc+core-linux-x64-gnu",
      "node_modules/.pnpm/@swc+core-linux-x64-musl",
    ],
  },
  transpilePackages: ["../../packages/utils/src/*"],
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "cdn.discordapp.com",
      "k.kakaocdn.net",
    ],
  },
});

module.exports = nextConfig;
