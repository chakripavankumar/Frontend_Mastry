/** @type {import('next').NextConfig} */
const nextConfig = {
  // ... other configurations you may have

  images: {
    // This is the key change to allow the external image host
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ui.aceternity.com",
        port: "", // Leave empty if not specified
        pathname: "/**", // Allows any path on this hostname
      },
    ],
  },
};

module.exports = nextConfig;
