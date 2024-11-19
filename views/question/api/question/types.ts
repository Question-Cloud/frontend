import { Level, Paging, SortOption } from "@/shared";

/** QuestionList */
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

interface QuestionRequest extends Paging {
  categories: number[] | string;
  levels: Level[] | string;
  questionType: "Past" | "SelfMade";
  sort: SortOption | string;
}

interface QuestionList {
  total: number;
  result: Question[];
}

/** QuestionDetail */
interface QuestionDetail {
  question: Question;
}

/** QuestionReview */
interface Review {
  id: number;
  name: string;
  isCreator: boolean;
  isWriter: boolean;
  reviewCount: number;
  rateAverage: number;
  rate: number;
  comment: string;
  createdAt: string;
}

interface QuestionReviewRequest extends Paging {
  questionId: number;
}

interface QuestionReviews {
  total: number;
  result: Review[];
}

interface EachCreatorQuestionRequest extends QuestionRequest {
  creatorId: number;
}

export type {
  Level,
  SortOption,
  QuestionRequest,
  QuestionReviewRequest,
  EachCreatorQuestionRequest,
  Question,
  QuestionList,
  QuestionDetail,
  Review,
  QuestionReviews,
};
