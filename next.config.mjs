/** @type {import('next').NextConfig} */
const nextConfig = {
  //   distDir: "build",
  //   output: "export",
  reactStrictMode: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
};

export default nextConfig;
