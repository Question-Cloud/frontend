import { Review } from "../api/question";
import { QuestionReviewItem } from "./questionReviewItem";
import { Separator } from "@/shared";

const QuestionReviewList = ({ questionReviewData }: { questionReviewData: Review[] }) => {
  return (
    questionReviewData &&
    questionReviewData.map((review) => (
      <div key={review.id}>
        <QuestionReviewItem review={review} />
        <Separator />
      </div>
    ))
  );
};

export { QuestionReviewList };
