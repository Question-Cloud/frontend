type Level = "LEVEL1" | "LEVEL2" | "LEVEL3" | "LEVEL4" | "LEVEL5" | "LEVEL6";

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
  categories: number[];
  levels: Level[];
  questionType: "Past" | "SelfMade";
  sort: "Popularity" | "Rate" | "Latest" | "LEVEL";
  page: number;
  size: number;
}

interface EachCreatorQuestionRequest extends QuestionRequest {
  creatorId: number;
}

export type { Level, QuestionRequest, EachCreatorQuestionRequest, Question, QuestionList };
