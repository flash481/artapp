const UNLOCK_MARKER = "1";

export function isPasswordHashConfigured(hash: string | undefined): hash is string {
  return typeof hash === "string" && /^[a-f\d]{64}$/i.test(hash.trim());
}

export function unlockStorageKey(hash: string): string {
  return `art-course:unlocked:${hash.trim().toLowerCase()}`;
}

function resolveStorage(storage?: Storage): Storage {
  return storage ?? window.localStorage;
}

export async function sha256Hex(value: string): Promise<string> {
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value));
  return Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
}

export async function verifyPassword(password: string, expectedHash: string): Promise<boolean> {
  if (!isPasswordHashConfigured(expectedHash)) return false;
  const actual = await sha256Hex(password);
  let difference = 0;
  const normalizedExpected = expectedHash.trim().toLowerCase();
  for (let index = 0; index < normalizedExpected.length; index += 1) {
    difference |= normalizedExpected.charCodeAt(index) ^ actual.charCodeAt(index);
  }
  return difference === 0;
}

export function hasUnlockMarker(hash: string, storage?: Storage): boolean {
  try {
    return resolveStorage(storage).getItem(unlockStorageKey(hash)) === UNLOCK_MARKER;
  } catch {
    return false;
  }
}

export function saveUnlockMarker(hash: string, storage?: Storage): void {
  try {
    resolveStorage(storage).setItem(unlockStorageKey(hash), UNLOCK_MARKER);
  } catch {
    // The unlock lasts for this app session even if local storage is unavailable.
  }
}

export function clearUnlockMarker(hash: string, storage?: Storage): void {
  try {
    resolveStorage(storage).removeItem(unlockStorageKey(hash));
  } catch {
    // Locking the current app session still works if local storage is unavailable.
  }
}
