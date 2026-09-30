import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";

function stripPrivateLessonBookReferences(): Plugin {
  return {
    name: "strip-private-lesson-book-references",
    enforce: "pre",
    transform(source, id) {
      const normalizedId = id.split("?")[0].replaceAll("\\", "/");
      if (!/\/curriculum\/lessons\/lesson-[^/]+\.json$/.test(normalizedId)) return null;

      const lesson = JSON.parse(source) as Record<string, unknown>;
      if (!Array.isArray(lesson.bookReferences)) return null;
      return { code: JSON.stringify({ ...lesson, bookReferences: [] }), map: null };
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_PATH || "/",
    plugins: [stripPrivateLessonBookReferences(), react()],
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
      restoreMocks: true,
      clearMocks: true,
    },
  };
});
