/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  basePath: '/swarmforge',
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
