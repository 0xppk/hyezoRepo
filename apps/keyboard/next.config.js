/** @type {import('next').NextConfig} */

const isProduction = process.env.NODE_ENV === "production";
const withPWA = require("@ducanh2912/next-pwa").default({
  dest: "public",
  disable: !isProduction,
});

const config = {
  experimental: {
    appDir: true,
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
};

const nextConfig = withPWA({
  ...config,
});

module.exports = nextConfig;
