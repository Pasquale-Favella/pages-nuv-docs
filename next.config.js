/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: "/pages-nuv-docs",
  assetPrefix: "/pages-nuv-docs",
}

module.exports = nextConfig
