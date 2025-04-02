// next.config.js

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  basePath: isProd ? '/Web_Programming_Project_Goureesankar' : '',
  assetPrefix: isProd ? '/Web_Programming_Project_Goureesankar/' : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;