import { describe, expect, it } from "vitest";
import {
  emptyProgress,
  loadProgress,
  parseProgress,
  PROGRESS_STORAGE_KEY,
  saveProgress,
} from "../src/lib/progress";

describe("local course progress", () => {
  it("restores the current lesson, completions, revisits, concepts, and settings", () => {
    const progress = {
      ...emptyProgress(),
      currentLessonId: "fixture-02-measure-by-comparison",
      completedLessonIds: ["fixture-01-negative-space"],
      revisitCounts: { "fixture-01-negative-space": 2 },
      conceptPracticeHistory: { "negative-space": 3 },
    };
    saveProgress(progress);

    expect(loadProgress()).toEqual(progress);
    expect(window.localStorage.getItem(PROGRESS_STORAGE_KEY)).toContain("fixture-02-measure-by-comparison");
  });

  it("rejects malformed imported progress and falls back to a clean state", () => {
    expect(parseProgress({ currentLessonId: "x" })).toBeNull();
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, "not-json");
    expect(loadProgress()).toEqual(emptyProgress());
  });
});
