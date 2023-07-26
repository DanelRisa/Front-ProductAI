/** @type {import('next').NextConfig} */
const nextConfig = {}

// next.config.js
module.exports = {
    async rewrites() {
      return [
        {
          source: '/category/:categoryName',
          destination: '/category', // This should match the actual page file name
        },
      ];
    },
  };
  