import { Option } from "@/components/_shared/ui";

interface Unit {
  title: string;
  subject: string;
  sub: { id: number; title: string }[];
}

interface CategoryData {
  subject: string;
  list: Unit[];
}

export interface FilterProps {
  subjectData: Option[];
  categoryData: CategoryData;
  levels: string[];
}