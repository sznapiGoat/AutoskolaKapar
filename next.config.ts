import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/kondicni-jizdy", destination: "/sluzby/kondicni-jizdy", permanent: true },
      { source: "/l17", destination: "/sluzby/l17", permanent: true },
    ]
  },
};

export default nextConfig;
