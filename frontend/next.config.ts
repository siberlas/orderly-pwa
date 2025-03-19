// next.config.ts
import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'web';
    }
    return config;
  },
  swcMinify: true,
};

export default nextConfig;
