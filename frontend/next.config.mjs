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
   webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = 'web';
    }
    return config;
  },
 };
 
 export default withPWA(nextConfig);