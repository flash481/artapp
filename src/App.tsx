import { type ChangeEvent, useEffect, useMemo, useState } from "react";
import { PasswordGate } from "./components/PasswordGate";
import { lessons, lessonAssetUrl, type Lesson, type LessonVisual } from "./lib/lesson";
import {
  emptyProgress,
  loadProgress,
  parseProgress,
  saveProgress,
  type CourseProgress,
} from "./lib/progress";

interface AppProps {
  passwordHash?: string;
}

function ImageViewer({ visual }: { visual: LessonVisual }) {
  const [expanded, setExpanded] = useState(false);
  const imageUrl = lessonAssetUrl(visual.src);

  useEffect(() => {
    if (!expanded) return;
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setExpanded(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [expanded]);

  return (
    <figure className="lesson-figure">
      <button className="visual-button" type="button" onClick={() => setExpanded(true)} aria-label={`Enlarge image: ${visual.alt}`}>
        <img src={imageUrl} alt={visual.alt} loading="lazy" />
        <span className="enlarge-hint" aria-hidden="true">Tap to enlarge</span>
      </button>
      {visual.caption && <figcaption>{visual.caption}</figcaption>}
      {expanded && (
        <div className="image-backdrop" onClick={() => setExpanded(false)} role="presentation">
          <section
            aria-label="Enlarged teaching image"
            aria-modal="true"
            className="image-dialog"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            tabIndex={-1}
          >
            <button type="button" className="image-close" onClick={() => setExpanded(false)} aria-label="Close enlarged image">
              Close
            </button>
            <img src={imageUrl} alt={visual.alt} />
            {visual.caption && <p>{visual.caption}</p>}
          </section>
        </div>
      )}
    </figure>
  );
}

function LessonContent({ lesson }: { lesson: Lesson }) {
  return (
    <article className="lesson-content" aria-labelledby="lesson-title">
      <header className="lesson-heading">
        <p className="fixture-label">{lesson.label}</p>
        <p className="eyebrow">{lesson.lessonType.replaceAll("-", " ")} · {lesson.durationMinutes} minutes</p>
        <h1 id="lesson-title">{lesson.title}</h1>
        <p className="lesson-objective">{lesson.objective}</p>
        <div className="tag-row" aria-label="Lesson details">
          <span>{lesson.difficulty}</span>
          {lesson.medium.map((medium) => <span key={medium}>{medium}</span>)}
        </div>
      </header>

      <section className="lesson-section warmup-section" aria-labelledby="warmup-heading">
        <div className="section-marker">01</div>
        <div>
          <p className="eyebrow">{lesson.warmup.durationMinutes} minutes</p>
          <h2 id="warmup-heading">Warm up</h2>
          <p>{lesson.warmup.instructions}</p>
        </div>
      </section>

      <section className="lesson-section" aria-labelledby="ideas-heading">
        <div className="section-marker">02</div>
        <div>
          <p className="eyebrow">A small idea to take with you</p>
          <h2 id="ideas-heading">Before you draw</h2>
          <div className="prose">
            {lesson.explanation.map((paragraph, index) => <p key={`${index}-${paragraph}`}>{paragraph}</p>)}
          </div>
        </div>
      </section>

      {lesson.visuals.length > 0 && (
        <section className="lesson-section visual-section" aria-labelledby="visual-heading">
          <div className="section-marker">03</div>
          <div>
            <p className="eyebrow">Look closely</p>
            <h2 id="visual-heading">A visual note</h2>
            <div className="visual-grid">
              {lesson.visuals.map((visual) => <ImageViewer key={visual.src} visual={visual} />)}
            </div>
          </div>
        </section>
      )}

      <section className="lesson-section exercise-section" aria-labelledby="exercise-heading">
        <div className="section-marker">04</div>
        <div>
          <p className="eyebrow">{lesson.exercise.durationMinutes} minutes · {lesson.exercise.source.replaceAll("-", " ")}</p>
          <h2 id="exercise-heading">Your drawing</h2>
          <p>{lesson.exercise.instructions}</p>
          <p className="materials"><strong>Gather:</strong> {lesson.materials.join(" · ")}</p>
        </div>
      </section>

      <section className="lesson-section reflection-section" aria-labelledby="reflection-heading">
        <div className="section-marker">05</div>
        <div>
          <p className="eyebrow">A moment to notice</p>
          <h2 id="reflection-heading">Look back</h2>
          <ul className="reflection-list">
            {lesson.reflection.map((question) => <li key={question}>{question}</li>)}
          </ul>
          {lesson.extension && <p className="extension"><strong>If you have a little more time:</strong> {lesson.extension}</p>}
        </div>
      </section>

      <details className="lesson-notes">
        <summary>Lesson notes</summary>
        <div className="notes-grid">
          <div>
            <h3>Fundamentals</h3>
            <p><strong>Focus:</strong> {lesson.fundamentals.primary.join(", ") || "—"}</p>
            <p><strong>Also present:</strong> {lesson.fundamentals.secondary.join(", ") || "—"}</p>
          </div>
          <div>
            <h3>Concepts</h3>
            <ul className="concept-list">
              {lesson.concepts.map((concept) => (
                <li key={concept.id}>{concept.name}<span>{concept.stage}</span></li>
              ))}
            </ul>
          </div>
          {lesson.prerequisites.length > 0 && (
            <div>
              <h3>Prerequisites</h3>
              <p>{lesson.prerequisites.join(", ")}</p>
            </div>
          )}
        </div>
      </details>
    </article>
  );
}

function Navigation({
  currentIndex,
  completed,
  onSelect,
}: {
  currentIndex: number;
  completed: string[];
  onSelect: (lesson: Lesson) => void;
}) {
  return (
    <nav className="lesson-nav" aria-label="Choose a lesson">
      <ol>
        {lessons.map((lesson, index) => {
          const isCurrent = index === currentIndex;
          const isComplete = completed.includes(lesson.id);
          return (
            <li key={lesson.id}>
              <button
                aria-current={isCurrent ? "step" : undefined}
                aria-label={`Lesson ${index + 1}: ${lesson.title}${isComplete ? ", completed" : ""}`}
                className={`lesson-nav-item${isCurrent ? " is-current" : ""}${isComplete ? " is-complete" : ""}`}
                onClick={() => onSelect(lesson)}
                type="button"
              >
                <span className="nav-number">{isComplete ? "✓" : String(index + 1).padStart(2, "0")}</span>
                <span className="nav-title">{lesson.title}</span>
              </button>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function CourseApp({ onLock }: { onLock: () => void }) {
  const [progress, setProgress] = useState<CourseProgress>(() => loadProgress());
  const [expandedNotes, setExpandedNotes] = useState("");
  const [importMessage, setImportMessage] = useState("");
  const currentLesson = useMemo(
    () => lessons.find((lesson) => lesson.id === progress.currentLessonId) ?? lessons[0],
    [progress.currentLessonId],
  );
  const currentIndex = Math.max(0, lessons.findIndex((lesson) => lesson.id === currentLesson?.id));

  useEffect(() => saveProgress(progress), [progress]);
  useEffect(() => {
    if (currentLesson && progress.currentLessonId !== currentLesson.id) {
      setProgress((previous) => ({ ...previous, currentLessonId: currentLesson.id }));
    }
  }, [currentLesson, progress.currentLessonId]);

  function chooseLesson(lesson: Lesson) {
    setProgress((previous) => ({ ...previous, currentLessonId: lesson.id }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function toggleComplete() {
    if (!currentLesson) return;
    setProgress((previous) => {
      const alreadyComplete = previous.completedLessonIds.includes(currentLesson.id);
      if (alreadyComplete) {
        return {
          ...previous,
          completedLessonIds: previous.completedLessonIds.filter((id) => id !== currentLesson.id),
        };
      }
      const conceptPracticeHistory = { ...previous.conceptPracticeHistory };
      for (const concept of currentLesson.concepts) {
        conceptPracticeHistory[concept.id] = (conceptPracticeHistory[concept.id] ?? 0) + 1;
      }
      return {
        ...previous,
        completedLessonIds: [...previous.completedLessonIds, currentLesson.id],
        conceptPracticeHistory,
      };
    });
  }

  function logRevisit() {
    if (!currentLesson) return;
    setProgress((previous) => {
      const conceptPracticeHistory = { ...previous.conceptPracticeHistory };
      for (const concept of currentLesson.concepts) {
        conceptPracticeHistory[concept.id] = (conceptPracticeHistory[concept.id] ?? 0) + 1;
      }
      return {
        ...previous,
        revisitCounts: {
          ...previous.revisitCounts,
          [currentLesson.id]: (previous.revisitCounts[currentLesson.id] ?? 0) + 1,
        },
        conceptPracticeHistory,
      };
    });
  }

  function exportProgress() {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sketchbook-progress.json";
    link.click();
    URL.revokeObjectURL(url);
  }

  async function importProgress(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files?.[0];
    event.currentTarget.value = "";
    if (!file) return;
    try {
      const imported = parseProgress(JSON.parse(await file.text()));
      if (!imported) throw new Error("invalid progress format");
      const knownLessonIds = new Set(lessons.map((lesson) => lesson.id));
      imported.currentLessonId = imported.currentLessonId && knownLessonIds.has(imported.currentLessonId)
        ? imported.currentLessonId
        : lessons[0]?.id ?? null;
      imported.completedLessonIds = imported.completedLessonIds.filter((id) => knownLessonIds.has(id));
      imported.revisitCounts = Object.fromEntries(
        Object.entries(imported.revisitCounts).filter(([id]) => knownLessonIds.has(id)),
      );
      setProgress(imported);
      setImportMessage("Progress restored.");
    } catch {
      setImportMessage("That file is not a valid progress export.");
    }
  }

  if (lessons.length === 0 || !currentLesson) {
    return (
      <main className="app-shell">
        <p className="eyebrow">Sketchbook Lessons</p>
        <h1>No lesson fixtures found</h1>
        <p>Add lesson JSON files to <code>curriculum/lessons</code> to see the course.</p>
      </main>
    );
  }

  const completedCount = progress.completedLessonIds.length;
  const isCurrentComplete = progress.completedLessonIds.includes(currentLesson.id);

  return (
    <main className="app-shell">
      <header className="app-header">
        <a className="wordmark" href="#top" onClick={(event) => event.preventDefault()} aria-label="Sketchbook Lessons home">
          <span className="wordmark-mark" aria-hidden="true">✳</span>
          <span>Sketchbook lessons</span>
        </a>
        <p className="quiet-note">A personal drawing practice</p>
        <button type="button" className="header-lock-button" onClick={onLock} aria-label="Lock course">
          Lock
        </button>
      </header>

      <section id="top" className="course-overview" aria-label="Course progress">
        <div>
          <p className="eyebrow">A small study for today</p>
          <p className="progress-copy">Lesson {currentIndex + 1} of {lessons.length}<span aria-hidden="true"> · </span>{completedCount} completed</p>
        </div>
        <progress value={completedCount} max={lessons.length} aria-label={`${completedCount} of ${lessons.length} lessons completed`} />
      </section>

      <Navigation currentIndex={currentIndex} completed={progress.completedLessonIds} onSelect={chooseLesson} />

      <div className="lesson-layout">
        <LessonContent lesson={currentLesson} />

        <aside className="practice-panel" aria-label="Lesson actions">
          <p className="eyebrow">When you are ready</p>
          <button className="primary-button complete-button" onClick={toggleComplete} type="button">
            {isCurrentComplete ? "Completed · undo" : "Mark lesson complete"}
          </button>
          <button className="quiet-button" onClick={logRevisit} type="button">I practised this again</button>
          <p className="revisit-count">
            {progress.revisitCounts[currentLesson.id] ?? 0} revisit{(progress.revisitCounts[currentLesson.id] ?? 0) === 1 ? "" : "s"} logged
          </p>
        </aside>
      </div>

      <nav className="lesson-paging" aria-label="Previous and next lesson">
        <button disabled={currentIndex === 0} onClick={() => {
          const previousLesson = lessons[currentIndex - 1];
          if (previousLesson) chooseLesson(previousLesson);
        }} type="button">
          <span aria-hidden="true">←</span> Previous
        </button>
        <button disabled={currentIndex === lessons.length - 1} onClick={() => {
          const nextLesson = lessons[currentIndex + 1];
          if (nextLesson) chooseLesson(nextLesson);
        }} type="button">
          Next <span aria-hidden="true">→</span>
        </button>
      </nav>

      <details className="progress-tools" open={expandedNotes === "progress"} onToggle={(event) => {
        if (event.currentTarget.open) setExpandedNotes("progress");
        else setExpandedNotes("");
      }}>
        <summary>Progress and settings</summary>
        <div className="progress-tools-content">
          <p>Progress is stored only in this browser on this device.</p>
          <div className="tool-buttons">
            <button className="quiet-button" onClick={exportProgress} type="button">Export progress</button>
            <label className="file-button">
              Import progress
              <input accept="application/json,.json" onChange={importProgress} type="file" />
            </label>
          </div>
          {importMessage && <p role="status" className="import-message">{importMessage}</p>}
          <button className="text-button" onClick={() => setProgress(emptyProgress())} type="button">Clear local progress</button>
        </div>
      </details>

      <footer className="app-footer">
        <p>Take what helps. Leave room for your own way of seeing.</p>
      </footer>
    </main>
  );
}

export default function App({ passwordHash = import.meta.env.VITE_COURSE_PASSWORD_HASH }: AppProps) {
  return (
    <PasswordGate hash={passwordHash}>
      {(lock) => <CourseApp onLock={lock} />}
    </PasswordGate>
  );
}
