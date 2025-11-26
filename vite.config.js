import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  root: "App",
  publicDir: "public",
  base: process.env.BASE_URL || "/for-juniors/",
  build: {
    outDir: "../build",
    emptyOutDir: true,
  },
});
