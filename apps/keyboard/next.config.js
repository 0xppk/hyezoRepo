/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["../../packages/utils/src/*"],
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com", "cdn.discordapp.com"],
  },
};

module.exports = nextConfig;
