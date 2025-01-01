/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "http",
        port: "**",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
