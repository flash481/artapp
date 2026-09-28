import { afterEach, beforeEach } from "vitest";
import { cleanup } from "@testing-library/react";
import { webcrypto } from "node:crypto";

Object.defineProperty(globalThis, "crypto", { configurable: true, value: webcrypto });
Object.defineProperty(window, "scrollTo", { configurable: true, value: () => undefined });

beforeEach(() => {
  window.localStorage.clear();
});

afterEach(() => {
  cleanup();
});
