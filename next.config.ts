import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: every route comes from generateStaticParams.
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
