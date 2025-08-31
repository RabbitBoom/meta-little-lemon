import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  server: {
    host: "0.0.0.0",
  },
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      images: new URL("./src/assets/images", import.meta.url).pathname,
      styles: new URL("./src/assets/styles", import.meta.url).pathname,
      mock: new URL("./src/mock", import.meta.url).pathname,
      components: new URL("./src/components", import.meta.url).pathname,
      app: new URL("./src/app", import.meta.url).pathname,
    },
  },
});
