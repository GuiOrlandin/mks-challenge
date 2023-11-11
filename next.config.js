/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["mks-sistemas.nyc3.digitaloceanspaces.com"],
  },
  pageExtensions: ["page.tsx", "page.ts", "page.jsx", "page.js"],
};

module.exports = nextConfig;
