import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import App from "../src/App";
import { sha256Hex } from "../src/lib/password";
import { PROGRESS_STORAGE_KEY } from "../src/lib/progress";

describe("lesson app", () => {
  it("unlocks, renders lesson content, navigates, and locks again", async () => {
    const passwordHash = await sha256Hex("studio");
    render(<App passwordHash={passwordHash} />);

    fireEvent.change(screen.getByLabelText("Password"), { target: { value: "studio" } });
    fireEvent.click(screen.getByRole("button", { name: "Continue" }));

    expect(await screen.findByRole("heading", { name: "Look at the gaps" })).toBeTruthy();
    expect(screen.getByText("DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM")).toBeTruthy();
    expect(screen.getByRole("img", { name: /Two simple desk objects/ })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Lesson 2: Compare before you commit" }));
    expect(await screen.findByRole("heading", { name: "Compare before you commit" })).toBeTruthy();

    fireEvent.click(screen.getByRole("button", { name: "Mark lesson complete" }));
    await waitFor(() => expect(JSON.parse(window.localStorage.getItem(PROGRESS_STORAGE_KEY) ?? "{}").completedLessonIds)
      .toContain("fixture-02-measure-by-comparison"));

    fireEvent.click(screen.getByRole("button", { name: "Lock course" }));
    expect(screen.getByRole("heading", { name: "Open your sketchbook" })).toBeTruthy();
  });

  it("shows setup instructions when no password hash is configured", () => {
    render(<App passwordHash="" />);
    expect(screen.getByRole("heading", { name: "Password setup required" })).toBeTruthy();
    expect(screen.getByText(/VITE_COURSE_PASSWORD_HASH/)).toBeTruthy();
  });
});
