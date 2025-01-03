type Level = "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5" | "LEVEL6";
type SortOption = "Popularity" | "Rate" | "Latest" | "LEVEL";

interface Question {
  id: number;
  title: string;
  parentCategory: string;
  childCategory: string;
  thumbnail: string;
  creatorName: string;
  questionLevel: Level;
  price: number;
  rate: number;
  isOwned: boolean;
}

interface QuestionList {
  total: number;
  result: Question[];
}

interface QuestionRequest {
  categories: number[] | string;
  levels: Level[] | string;
  questionType: "Past" | "SelfMade";
  sort: SortOption | string;
  page: number;
  size: number;
}

interface EachCreatorQuestionRequest extends QuestionRequest {
  creatorId: number;
}

export type { Level, SortOption, QuestionRequest, EachCreatorQuestionRequest, Question, QuestionList };
