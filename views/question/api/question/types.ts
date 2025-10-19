import { Level, Paging, SortOption } from "@/shared";

/** QuestionList */
interface QuestionContent {
  id: number;
  creatorId: number;
  title: string;
  subject: string;
  parentCategory: string;
  childCategory: string;
  thumbnail: string;
  questionLevel: Level;
  price: number;
  promotionName: string;
  promotionPrice: number;
  rate: number;
}

interface QuestionItem {
  questionContent: QuestionContent;
  creator: string;
  isOwned: boolean;
}

interface QuestionRequest extends Paging {
  categories: number[] | string;
  levels: Level[] | string;
  questionType: "Past" | "SelfMade";
  sort: SortOption | string;
}

interface QuestionListResponse {
  total: number;
  result: QuestionItem[];
}

/** QuestionDetail */
interface QuestionDetail {
  productDetail: {
    questionContent: QuestionContent;
    creator: string;
    isOwned: true;
  };
}

/** QuestionReview */
interface Review {
  id: number;
  reviewerName: string;
  reviewerStatistics: {
    reviewCount: number;
    rateAverage: number;
  };
  rate: number;
  comment: string;
  isWriter: boolean;
  createdAt: string;
}

interface QuestionReviewRequest extends Paging {
  questionId: number;
}

interface QuestionReviewResponse {
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
  QuestionItem,
  QuestionListResponse,
  QuestionDetail,
  Review,
  QuestionReviewResponse,
};
