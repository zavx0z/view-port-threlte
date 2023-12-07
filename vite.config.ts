//@ts-nocheck
import { defineConfig } from "vite"
import { svelte } from "@sveltejs/vite-plugin-svelte"
import { readdirSync } from "node:fs"

const entries = readdirSync("./src/lib")
const entry = Object.fromEntries(entries.map((entry: any) => [entry.replace(".svelte", ".js"), `./src/lib/${entry}`]))
export default defineConfig({
  build: {
    copyPublicDir: false,
    lib: {
      entry,
      fileName(_, entryName) {
        return entryName
      },
      formats: ["es"],
    },
  },
  plugins: [svelte()],
})
