import path from "node:path";
import { defineConfig } from "vitest/config";

export default defineConfig({
  resolve: {
    alias: [
      { find: "server-only", replacement: path.resolve(import.meta.dirname, "tests/server-only.ts") },
      { find: "@", replacement: path.resolve(import.meta.dirname) }
    ]
  },
  test: { environment: "node", include: ["tests/**/*.test.ts"] }
});
