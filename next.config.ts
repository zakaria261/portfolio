import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Optimisation des images
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Optimisation du build
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // Optimisation des performances
  poweredByHeader: false,
  compress: true,

  // Optimisation du bundle
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Reactstrictmode pour identifier les problèmes
  reactStrictMode: true,
};

export default nextConfig;
