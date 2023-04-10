/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig