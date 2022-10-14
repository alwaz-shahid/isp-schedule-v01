/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
  dest: 'public',
});

module.exports = withPWA({
  // next.js config
  reactStrictMode: true,
  swcMinify: true,
});

// const nextConfig = {

// };

// module.exports = nextConfig;
// reactStrictMode: true,
// swcMinify: true,
