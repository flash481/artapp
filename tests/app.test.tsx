import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";
import { PROGRESS_STORAGE_KEY } from "../src/lib/progress";

describe("lesson app", () => {
  it("opens directly, renders lesson content, navigates, and saves progress", async () => {
    render(<App />);
    expect(await screen.findByRole("heading", { name: "Your first drawing" })).toBeTruthy();
    expect(screen.queryByLabelText("Password")).toBeNull();
    expect(screen.queryByText("DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM")).toBeNull();
    expect(screen.getByText("Lessons 10–72 planned")).toBeTruthy();
    expect(screen.getByText("Go deeper")).toBeTruthy();
    expect(screen.getByText("Sources & further reading")).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Self-check" })).toBeTruthy();
    expect(screen.getByRole("heading", { name: "Common mistakes" })).toBeTruthy();
    const deeper = screen.getByText("Go deeper").closest("details");
    expect(deeper?.open).toBe(false);
    fireEvent.click(screen.getByText("Go deeper"));
    expect(deeper?.open).toBe(true);

    fireEvent.click(screen.getByRole("button", { name: "Lesson 2: Follow an edge" }));
    expect(await screen.findByRole("heading", { name: "Follow an edge" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Mark lesson complete" }));
    await waitFor(() => expect(JSON.parse(window.localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}").completedLessonIds)
      .toContain("lesson-02"));

    fireEvent.click(screen.getByRole("button", { name: "Next" }));
    expect(await screen.findByRole("heading", { name: "Shapes around a plant" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Lesson 8: Build a cup from volumes" }));
    expect(await screen.findByRole("heading", { name: "Build a cup from volumes" })).toBeTruthy();
    expect(screen.getAllByRole("button", { name: /Enlarge image:/ }).length).toBeGreaterThanOrEqual(4);

  });
});
