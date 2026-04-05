import type { NextConfig } from "next";
import { dirname } from "path";
import { fileURLToPath } from "url";

const currentDir = dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 92],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "landingfoliocom.imgix.net",
      },
      {
        protocol: "https",
        hostname: "cdn.rareblocks.xyz",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  turbopack: {
    // Ensure Turbopack resolves from this project even with other lockfiles.
    root: currentDir,
  },
};

export default nextConfig;
