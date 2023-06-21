/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'liquipedia.net',
        port: ''
      }
    ]
  }
}

module.exports = nextConfig
