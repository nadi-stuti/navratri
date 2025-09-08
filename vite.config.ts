// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimize for mobile
    target: "es2015",
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log in production
      },
    },
  },
});
