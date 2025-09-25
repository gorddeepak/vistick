import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Base path for production assets
  base: "/",

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "::",
    port: 5173,
    allowedHosts: "all", // only for local dev; Render should serve production build
  },

  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
