/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      "encrypted-tbn0.gstatic.com",
      "image.posttoday.com",
      "image.makewebcdn.com",
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "png.pngtree.com",
      },
    ],
  },
  trailingSlash: true,
  experimental: {
    turbopack: false, // ปิดการใช้งาน Turbopack
  },
};

module.exports = nextConfig;
