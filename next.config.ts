import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 176, 256, 384],
    minimumCacheTTL: 31536000,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "@react-three/drei"],
  },
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
