import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { URL, fileURLToPath } from "node:url"

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        port: 5000,
        host: true,
        hmr: {
            host: "localhost",
        },
        proxy: {
            "/api": "http://localhost:3000",
        },
    },
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    build: {
        target: "esnext",
    },
    plugins: [vue()],
})
