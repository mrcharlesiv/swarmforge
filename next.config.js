/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/swarmforge',
  assetPrefix: '/swarmforge',

  // Image optimization - ENABLED for WebP/AVIF conversion
  images: {
    unoptimized: false,
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Performance optimizations
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Webpack optimizations for bundle splitting
  webpack: (config, { isServer }) => {
    // Optimize bundle splitting
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 10,
            chunks: 'all',
          },
          common: {
            name: 'common',
            minChunks: 2,
            priority: 5,
            chunks: 'all',
            reuseExistingChunk: true,
          },
        },
      };
    }

    return config;
  },

  // Experimental features for optimization
  experimental: {
    // Enable ESM externals
    esmExternals: true,
    // Optimize package imports (tree-shaking)
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  // Production optimizations
  productionBrowserSourceMaps: false,

  // React optimizations
  reactStrictMode: true,
  swcMinify: true,

  // Disable trailing slash to ensure consistent URL generation
  trailingSlash: false
}

module.exports = nextConfig
