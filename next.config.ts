import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : undefined,
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/:path*.html',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
