import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      external: ["particles.js"],
      output: {
        globals: {
          "particles.js": "particlesJS",
        },
      },
    },
  },
});
