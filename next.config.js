/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["m.media-amazon.com"],
  },
  basePath: "/mini-netflix",
  assetPrefix: "/mini-netflix/",
  output: "export",
};

module.exports = nextConfig;
