import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";
import { emptyProgress, PROGRESS_STORAGE_KEY } from "../src/lib/progress";

describe("lesson app", () => {
  it("shows the canonical lesson flow, fallback reference, and available course range", async () => {
    render(<App />);
    const firstLesson = await screen.findByRole("heading", { level: 1 });
    const firstTitle = firstLesson.textContent;
    expect(firstTitle).toBeTruthy();
    expect(screen.queryByText("DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM")).toBeNull();
    expect(screen.getByText("Lessons 11–150 planned")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Purpose" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Compare" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Correct and redraw" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Self-check" })).toBeTruthy();
    expect(screen.getByText("Supplied reference")).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /Enlarge image:/ }).length).toBeGreaterThan(0);
    expect(screen.getByRole("progressbar").getAttribute("max")).toBe("150");

    const sources = screen.getByText("Sources & further reading").closest("details");
    expect(sources?.open).toBe(false);

    fireEvent.click(screen.getByRole("button", { name: /^Lesson 2:/ }));
    const secondLesson = await screen.findByRole("heading", { level: 1 });
    const secondTitle = secondLesson.textContent;
    expect(secondTitle).not.toBe(firstTitle);

    fireEvent.click(screen.getByRole("button", { name: "Mark lesson complete" }));
    await waitFor(() => expect(JSON.parse(window.localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}").completedLessonIds)
      .toContain("core-002"));

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    const thirdLesson = await screen.findByRole("heading", { level: 1 });
    const thirdTitle = thirdLesson.textContent;
    expect(thirdTitle).not.toBe(secondTitle);

    fireEvent.click(screen.getByRole("button", { name: /^Lesson 8:/ }));
    const eighthLesson = await screen.findByRole("heading", { level: 1 });
    expect(eighthLesson.textContent).not.toBe(thirdTitle);
    expect(screen.getAllByRole("button", { name: /Enlarge image:/ }).length).toBeGreaterThan(0);
  });

  it("preserves MVP history while excluding it from canonical lesson progress", async () => {
    window.localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify({
      ...emptyProgress(),
      currentLessonId: "lesson-01",
      completedLessonIds: ["lesson-01", "lesson-02"],
      revisitCounts: { "lesson-01": 2 },
      conceptPracticeHistory: { "legacy-concept": 3 },
    }));
    render(<App />);
    await screen.findByRole("heading", { level: 1 });
    expect(document.querySelector(".progress-copy")?.textContent).toBe("Lesson 1 of 10 available · 0 completed");
    await waitFor(() => {
      const stored = JSON.parse(window.localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}");
      expect(stored.currentLessonId).toBe("core-001");
      expect(stored.completedLessonIds).toEqual(["lesson-01", "lesson-02"]);
      expect(stored.revisitCounts).toEqual({ "lesson-01": 2 });
      expect(stored.conceptPracticeHistory).toEqual({ "legacy-concept": 3 });
    });
  });
});
