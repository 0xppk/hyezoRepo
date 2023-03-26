/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["./node_modules/hyezo/public/*"],
  reactStrictMode: true,
};

module.exports = nextConfig;
