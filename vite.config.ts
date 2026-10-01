import { defineConfig } from "vitest/config";
import { loadEnv } from "vite";
import type { Plugin } from "vite";
import react from "@vitejs/plugin-react";

function stripPrivateLessonMetadata(): Plugin {
  const privateFields = [
    "bookReferences",
    "sourceImages",
    "authoring",
    "authoringMetadata",
    "productionNotes",
    "sourceEvidence",
    "sourceAnchors",
    "sourceInsights",
    "reviewNotes",
  ];
  function stripVisualProvenance(visual: unknown) {
    if (!visual || typeof visual !== "object" || Array.isArray(visual)) return;
    delete (visual as Record<string, unknown>).provenance;
  }
  function stripVisualList(visuals: unknown) {
    if (!Array.isArray(visuals)) return;
    visuals.forEach(stripVisualProvenance);
  }
  return {
    name: "strip-private-lesson-metadata",
    enforce: "pre",
    transform(source, id) {
      const normalizedId = id.split("?")[0].replaceAll("\\", "/");
      if (!/\/curriculum\/lessons\/(?:lesson|core)-[^/]+\.json$/.test(normalizedId)) return null;

      const lesson = JSON.parse(source) as Record<string, unknown>;
      for (const field of privateFields) delete lesson[field];
      stripVisualList(lesson.visuals);
      if (lesson.haveReady && typeof lesson.haveReady === "object") {
        stripVisualProvenance((lesson.haveReady as Record<string, unknown>).fallbackVisual);
      }
      if (lesson.teaching && typeof lesson.teaching === "object") {
        const teaching = lesson.teaching as Record<string, unknown>;
        stripVisualList(teaching.conceptVisuals);
        stripVisualList(teaching.warmupVisuals);
        stripVisualList(teaching.exerciseVisuals);
        if (Array.isArray(teaching.commonMistakes)) {
          teaching.commonMistakes.forEach((item: unknown) => {
            if (item && typeof item === "object") stripVisualProvenance((item as Record<string, unknown>).visual);
          });
        }
      }
      return { code: JSON.stringify(lesson), map: null };
    },
  };
}

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    base: env.VITE_BASE_PATH || "/",
    plugins: [stripPrivateLessonMetadata(), react()],
    test: {
      environment: "jsdom",
      setupFiles: ["./tests/setup.ts"],
      restoreMocks: true,
      clearMocks: true,
    },
  };
});
