/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "r2.devwithkd.com",
      },
    ],
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
