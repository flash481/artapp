import { beforeEach, describe, expect, it } from "vitest";
import {
  clearUnlockMarker,
  hasUnlockMarker,
  isPasswordHashConfigured,
  saveUnlockMarker,
  sha256Hex,
  unlockStorageKey,
  verifyPassword,
} from "../src/lib/password";

describe("course password gate", () => {
  beforeEach(() => window.localStorage.clear());

  it("accepts only a matching SHA-256 password", async () => {
    const hash = await sha256Hex("pencil-and-paper");
    await expect(verifyPassword("pencil-and-paper", hash)).resolves.toBe(true);
    await expect(verifyPassword("another-password", hash)).resolves.toBe(false);
    expect(isPasswordHashConfigured(hash)).toBe(true);
    expect(isPasswordHashConfigured("not-a-hash")).toBe(false);
  });

  it("persists only an unlock marker and removes it when locked", () => {
    const hash = "a".repeat(64);
    saveUnlockMarker(hash);
    expect(hasUnlockMarker(hash)).toBe(true);
    expect(window.localStorage.getItem(unlockStorageKey(hash))).toBe("1");
    expect(window.localStorage.getItem(unlockStorageKey(hash))).not.toContain("password");
    clearUnlockMarker(hash);
    expect(hasUnlockMarker(hash)).toBe(false);
  });
});
