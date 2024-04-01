import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

import react from "@vitejs/plugin-react";
import svgr from "@svgr/rollup";

import path from "path";

export default defineConfig({
  plugins: [
    react(),
    svgr({ exportType: "default" }),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
      },
      includeAssets: ["**/*.{png}"],
      manifest: {
        name: "Digest Application",
        short_name: "Digest App",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#000",
        background_color: "#ffffff",
      },
    }),
  ],
  envPrefix: "REACT_APP_",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 3001,
  },
});
