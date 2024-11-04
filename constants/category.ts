export const subjectKeys = {
  Mathematics: "수학",
  Physics: "물리",
  Chemistry: "화학",
  Biology: "생명과학",
  EarthScience: "지구과학",
} as const;

export type SubjectUnion = (typeof subjectKeys)[keyof typeof subjectKeys];
