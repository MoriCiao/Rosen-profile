import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/Rosen-profile/",
  plugins: [react()],
  base: "/", // ← ⬅⬅⬅ 一定要 base 是根目錄
});
