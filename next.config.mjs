/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'xn--80aqfgda6as.xn--p1ai',
        port: '',
        pathname: '/img/logo.webp',
      },
    ],
  },
}
export default nextConfig
