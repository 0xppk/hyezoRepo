/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["./node_modules/hyezo/src/*"],
  reactStrictMode: true,
};

module.exports = nextConfig;
