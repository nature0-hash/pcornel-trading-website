import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  allowedDevOrigins: [
    "preview-chat-f0921062-9e90-458e-a88b-334a5e873dd5.space-z.ai",
    "*.space-z.ai",
  ],
};

export default nextConfig;
