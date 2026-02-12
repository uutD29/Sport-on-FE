/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sporton-be-production-91bf.up.railway.app",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
