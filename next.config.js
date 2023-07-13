/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['resizer.otstatic.com', 'plus.unsplash.com', 'picsum.photos', '*'],
  },
}

module.exports = nextConfig
