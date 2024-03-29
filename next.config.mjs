/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
      return [
        {
          source: "/",
          destination: "/apartments",
        },
        {
          source: "/index",
          destination: "/index",
        },
      ];
    },
  };

export default nextConfig;
