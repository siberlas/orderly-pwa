import withPWA from "next-pwa";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

// Configuration PWA à part pour éviter les erreurs de typage
const pwaConfig = {
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Désactive PWA en développement
};

// Fusion correcte des options Next.js et PWA
export default withPWA({
  ...nextConfig,
  ...pwaConfig,
});
