import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  root: "client", // serve from client
  publicDir: "public", // now client/public
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
  plugins: [react(), tailwindcss()],
});
