/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
    fontLoaders: [
      { loader: '@next/font/google', options: { subsets: ['latin'] } }
    ],
  },
  images: {
    domains: ['images.unsplash.com'],
    dangerouslyAllowSVG: true,
  },
}

module.exports = nextConfig