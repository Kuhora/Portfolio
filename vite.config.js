import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/", 
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    preserveSymlinks: true,
  },
  build: {
    outDir: "dist",
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        assetFileNames: "assets/[name].[ext]",
        entryFileNames: "assets/[name].js",
      }
    }
  },
  server: {
    port: 3000,
    strictPort: true
  },
    optimizeDeps: {
    force: true
  }
});