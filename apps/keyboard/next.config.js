/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["../../packages/utils/public/*"],
  reactStrictMode: true,
};

module.exports = nextConfig;
