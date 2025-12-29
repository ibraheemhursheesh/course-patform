import type { NextConfig } from "next";

// "https://lh3.googleusercontent.com/a/ACg8ocL6jFD-yJlLRMV4mCihrCBLBvwBauj0GIfp8T_2Nz2ADhzYuSp9=s96-c";
const nextConfig: NextConfig = {
  images: {
    domains: ["lh3.googleusercontent.com"],
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
