import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],

  // Base path for assets, set to "/" for root deployment
  base: "/",

  resolve: {
    alias: {
      // Optional: allows using "@" to refer to src folder
      "@": path.resolve(__dirname, "src"),
    },
  },

  server: {
    host: "::",         // allow external network access
    port: 5173,         // Vite dev port
    allowedHosts: "all", // allow all hosts (Render network host)
  },

  build: {
    outDir: "dist",    // build output folder
    sourcemap: false,  // optional, disable source maps in prod
  },
});
