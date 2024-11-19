import { Level, SortOption } from "@/shared";

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
  description: string;
  createdAt: string;
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

interface QuestionDetail {
  question: Question;
}

interface EachCreatorQuestionRequest extends QuestionRequest {
  creatorId: number;
}

export type { Level, SortOption, QuestionRequest, EachCreatorQuestionRequest, Question, QuestionList, QuestionDetail };
