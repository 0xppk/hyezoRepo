/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["../../packages/utils/src/*"],
  reactStrictMode: true,
};

module.exports = nextConfig;
