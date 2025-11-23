/** @type {import('next').NextConfig} */
const nextConfig = {
  // Strict TypeScript checking for production quality
  typescript: {
    ignoreBuildErrors: false,
  },
  // Image optimization handled by Netlify
  images: {
    unoptimized: true,
  },
  // Performance optimizations
  reactStrictMode: true,
  // Optimize production build
  compress: true,
  // Generate ETags for better caching
  generateEtags: true,
  // Power up by Vercel Analytics
  poweredByHeader: false,
}

export default nextConfig
