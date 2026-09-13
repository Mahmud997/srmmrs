import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages:
// - user/org site (username.github.io) → base: '/'
// - project site (username.github.io/repo) → base: '/repo-name/'
// По умолчанию relative "./" — работает в большинстве случаев.
export default defineConfig({
  plugins: [react()],
  base: process.env.VITE_BASE || "./",
});
