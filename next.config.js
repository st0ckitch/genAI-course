/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  // Add this to help with CSS loading issues
  optimizeFonts: false,
  // Make sure any CSS modules get processed correctly
  webpack(config) {
    return config;
  },
}

module.exports = nextConfig
