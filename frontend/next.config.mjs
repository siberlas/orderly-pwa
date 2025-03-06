import nextPwa from "next-pwa";

const withPWA = nextPwa({
  dest: "public",
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === "development", // Désactive en dev
  exclude: [
    ({ asset }) => asset.name.startsWith("static/chunks/webpack"),
  ],
});

const nextConfig = {
  reactStrictMode: true,
};

export default withPWA(nextConfig);
