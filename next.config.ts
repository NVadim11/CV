/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === 'production';
const repo = 'CV'; 

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  assetPrefix: isProd ? `/${repo}/` : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;