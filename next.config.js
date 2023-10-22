/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["www.dropbox.com"],
  },
};

module.exports = nextConfig;
