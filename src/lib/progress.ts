export const PROGRESS_STORAGE_KEY = "art-course:progress:v1";

export interface CourseProgress {
  currentLessonId: string | null;
  completedLessonIds: string[];
  revisitCounts: Record<string, number>;
  conceptPracticeHistory: Record<string, number>;
  settings: { showFixtureLabels: boolean };
}

export function emptyProgress(): CourseProgress {
  return {
    currentLessonId: null,
    completedLessonIds: [],
    revisitCounts: {},
    conceptPracticeHistory: {},
    settings: { showFixtureLabels: true },
  };
}

function isNumberRecord(value: unknown): value is Record<string, number> {
  return (
    value !== null &&
    typeof value === "object" &&
    !Array.isArray(value) &&
    Object.values(value).every((entry) => Number.isFinite(entry) && entry >= 0)
  );
}

export function parseProgress(value: unknown): CourseProgress | null {
  if (value === null || typeof value !== "object" || Array.isArray(value)) return null;
  const record = value as Record<string, unknown>;
  if (
    !(record.currentLessonId === null || typeof record.currentLessonId === "string") ||
    !Array.isArray(record.completedLessonIds) ||
    !record.completedLessonIds.every((entry) => typeof entry === "string") ||
    !isNumberRecord(record.revisitCounts) ||
    !isNumberRecord(record.conceptPracticeHistory)
  ) {
    return null;
  }
  const settings = record.settings;
  if (
    settings === null ||
    typeof settings !== "object" ||
    Array.isArray(settings) ||
    typeof (settings as Record<string, unknown>).showFixtureLabels !== "boolean"
  ) {
    return null;
  }
  return {
    currentLessonId: record.currentLessonId,
    completedLessonIds: [...new Set(record.completedLessonIds)],
    revisitCounts: { ...record.revisitCounts },
    conceptPracticeHistory: { ...record.conceptPracticeHistory },
    settings: { showFixtureLabels: (settings as { showFixtureLabels: boolean }).showFixtureLabels },
  };
}

function resolveStorage(storage?: Storage): Storage {
  return storage ?? window.localStorage;
}

export function loadProgress(storage?: Storage): CourseProgress {
  try {
    const raw = resolveStorage(storage).getItem(PROGRESS_STORAGE_KEY);
    if (!raw) return emptyProgress();
    return parseProgress(JSON.parse(raw)) ?? emptyProgress();
  } catch {
    return emptyProgress();
  }
}

export function saveProgress(progress: CourseProgress, storage?: Storage): void {
  try {
    resolveStorage(storage).setItem(PROGRESS_STORAGE_KEY, JSON.stringify(progress));
  } catch {
    // The app remains usable in private browsing modes that deny local storage.
  }
}
