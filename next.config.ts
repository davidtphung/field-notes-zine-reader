import type { NextConfig } from "next";

const plateRewrites = [
  ["page-01.jpg", "https://litter.catbox.moe/zzrefm.jpg"],
  ["page-02.jpg", "https://litter.catbox.moe/4xqi3p.jpg"],
  ["page-03.jpg", "https://litter.catbox.moe/mabz1d.jpg"],
  ["page-04.jpg", "https://litter.catbox.moe/hq0ewl.jpg"],
  ["page-05.jpg", "https://litter.catbox.moe/zdn8i1.jpg"],
  ["page-06.jpg", "https://litter.catbox.moe/r596gn.jpg"],
  ["page-07.jpg", "https://litter.catbox.moe/7gl1yv.jpg"],
  ["page-08.jpg", "https://litter.catbox.moe/3lf56f.jpg"],
  ["page-09.jpg", "https://litter.catbox.moe/4rrrb4.jpg"],
] as const;

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async rewrites() {
    return plateRewrites.map(([file, destination]) => ({
      source: `/zine/${file}`,
      destination,
    }));
  },
};

export default nextConfig;
