export const subjectKeys = {
  Mathematics: "수학",
  Physics: "물리",
  Chemistry: "화학",
  Biology: "생명과학",
  EarthScience: "지구과학",
} as const;

export const sortOptionKeys = {
  Popularity: "인기순",
  Rate: "별점순",
  Latest: "최신순",
  LEVEL: "난이도순",
} as const;

type SortOptionKeys = typeof sortOptionKeys;
type SortOption = keyof SortOptionKeys;
type SortOptionLabels = SortOptionKeys[SortOption];

export const reverseSortOptionKeys: Record<SortOptionLabels, SortOption> = Object.fromEntries(
  Object.entries(sortOptionKeys).map(([key, value]) => [value, key])
) as Record<SortOptionLabels, SortOption>;
