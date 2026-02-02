/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/swarmforge',
  assetPrefix: '/swarmforge',

  // Image optimization - disabled for static export (required for GitHub Pages)
  images: {
    unoptimized: true,
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
