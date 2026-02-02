/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/swarmforge',
  assetPrefix: '/swarmforge',
  images: {
    unoptimized: true
  },
  // Disable trailing slash to ensure consistent URL generation
  trailingSlash: false
}

module.exports = nextConfig
