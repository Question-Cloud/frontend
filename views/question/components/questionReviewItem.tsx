import React from "react";
import { Comment, CommentHeader, Rating, CommentBody, CommentFooter } from "@/shared";
import { dateFormatWithHourAndMinutes } from "@/utils";
import { ReviewItem } from "../api/question";

const QuestionReviewItem = ({ review }: { review: ReviewItem }) => {
  return (
    <Comment>
      <CommentHeader
        profileImage=""
        userName={review.reviewerName}
        userCommentDetail={`후기 ${review.reviewerStatistics.rateAverage} | 평균 별점 ${review.reviewerStatistics.rateAverage}`}
        isCreator={review.isWriter}
      />
      <Rating rate={review.rate} className="mt-[8px]" />
      <CommentBody content={review.comment} />
      <CommentFooter
        timestamp={dateFormatWithHourAndMinutes(review.createdAt)}
        isWriter={review.isWriter}
        onDelete={() => console.log("Comment deleted")}
      />
    </Comment>
  );
};

export { QuestionReviewItem };
