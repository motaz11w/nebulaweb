/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nebulaweb',
  assetPrefix: '/nebulaweb/',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
