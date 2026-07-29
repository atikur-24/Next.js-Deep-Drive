/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    FRONTEND_URL: "http://localhost:3000",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
    ],
  },
};

export default nextConfig;
