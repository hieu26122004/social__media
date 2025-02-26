import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@api": resolve(__dirname, "src/api"),
      "@assets": resolve(__dirname, "src/assets"),
      "@components": resolve(__dirname, "src/components"),
      "@config": resolve(__dirname, "src/config"),
      "@constants": resolve(__dirname, "src/constants"),
      "@helpers": resolve(__dirname, "src/helpers"),
      "@hooks": resolve(__dirname, "src/hooks"),
      "@intl": resolve(__dirname, "src/intl"),
      "@layouts": resolve(__dirname, "src/layouts"),
      "@services": resolve(__dirname, "src/services"),
      "@store": resolve(__dirname, "src/store"),
      "@styles": resolve(__dirname, "src/styles"),
      "@type": resolve(__dirname, "src/types"),
      "@views": resolve(__dirname, "src/views"),
      "@mocks": resolve(__dirname, "src/mocks"),
      "@lib": resolve(__dirname, "src/lib"),
    },
  },
});
