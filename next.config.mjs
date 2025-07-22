/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: {}, // Исправлено: теперь это объект
    optimizePackageImports: ["mongoose"],
  },
  logging: {
    level: "error",
  },
  reactStrictMode: true,
  productionBrowserSourceMaps: false, // Уменьшает размер билда
  compress: true,
  images: {
    unoptimized: true,
    formats: ["image/avif", "image/webp"], // Современные форматы
  },
  eslint: {
    ignoreDuringBuilds: true, // Игнорировать ESLint при сборке
  },
  typescript: {
    ignoreBuildErrors: true, // Игнорировать TS ошибки при сборке
  },
};

export default nextConfig;
