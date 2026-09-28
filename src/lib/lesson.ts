export type ConceptStage = "introduced" | "practised" | "revisited" | "combined" | "independent";

export interface LessonConcept {
  id: string;
  name: string;
  stage: ConceptStage;
}

export interface LessonVisual {
  src: string;
  alt: string;
  caption?: string;
  provenance: {
    kind: string;
    source?: string;
    creator?: string;
    license?: string;
    notes?: string;
  };
}

export interface Lesson {
  id: string;
  title: string;
  durationMinutes: number;
  difficulty: string;
  medium: string[];
  materials: string[];
  lessonType: string;
  fundamentals: { primary: string[]; secondary: string[] };
  concepts: LessonConcept[];
  prerequisites: string[];
  objective: string;
  warmup: { durationMinutes: number; instructions: string };
  explanation: string[];
  visuals: LessonVisual[];
  exercise: {
    durationMinutes: number;
    instructions: string;
    source: string;
    subjectType: string;
  };
  artistReferences: string[];
  bookReferences: Array<{ sourceId: string; pages?: string; note?: string }>;
  reflection: string[];
  extension?: string;
  scaffoldingLevel?: string;
  status: "development-fixture";
  label: "DEVELOPMENT FIXTURE — NOT FINAL CURRICULUM";
}

const lessonModules = import.meta.glob<Lesson>("/curriculum/lessons/*.json", {
  eager: true,
  import: "default",
});

export const lessons = Object.values(lessonModules).sort((a, b) => a.id.localeCompare(b.id));

export function lessonAssetUrl(src: string): string {
  if (/^https?:\/\//i.test(src)) return src;
  return `${import.meta.env.BASE_URL}${src.replace(/^\/+/, "")}`;
}
