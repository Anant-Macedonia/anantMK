/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["anantmkdev.wpengine.com"],
  },
};

module.exports = nextConfig;
