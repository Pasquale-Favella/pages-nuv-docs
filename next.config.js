const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "",
  },
  basePath: `${process.env.NEXT_PUBLIC_ASSETS || ''}`,
  assetPrefix: `${process.env.NEXT_PUBLIC_ASSETS || ''}`,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === "development",
  }
})

module.exports = nextConfig
