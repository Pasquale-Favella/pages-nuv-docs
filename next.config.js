/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: `${process.env.NEXT_PUBLIC_ASSETS || ''}`,
  assetPrefix: `${process.env.NEXT_PUBLIC_ASSETS || ''}`,
}

module.exports = nextConfig
