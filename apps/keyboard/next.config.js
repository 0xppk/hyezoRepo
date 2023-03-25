/** @type {import('next').NextConfig} */

const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ["../../packages/utils/src/*"],
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
  },

  async rewrites() {
    return [
      {
        source: "/api/upcoming",
        destination: `https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US&page=1`,
      },
      {
        source: "/api/movies/:id",
        destination: `https://api.themoviedb.org/3/movie/:id?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`,
      },
    ];
  },
};

module.exports = nextConfig;
