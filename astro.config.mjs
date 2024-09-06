import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  images: {
    loader: "custom",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.microcms-assets.io",
        port: "",
        pathname: "/assets/**",
      },
    ],
  },
});
