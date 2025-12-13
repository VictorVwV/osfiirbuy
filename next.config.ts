import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",              // required for static export
  basePath: "/osfiirbuy",        // must match your GitHub repo name
  images: { unoptimized: true }, // needed for Next.js Image on static export
};

export default nextConfig;