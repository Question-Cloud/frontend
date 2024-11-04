interface SubUnit {
  id: number;
  title: string;
}

interface Units {
  title: string;
  subject: string;
  sub: SubUnit[];
}

interface SubjectCategory {
  subject: String;
  list: Units[];
}

interface CategoryList {
  categories: SubjectCategory[];
}

export type { CategoryList, Units };
