import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/Rosen-profile/", // ← ⬅⬅⬅ 一定要 base 是根目錄
});
