/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/CV',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;