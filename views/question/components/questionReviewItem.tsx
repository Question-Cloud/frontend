import React from "react";
import { Comment, CommentHeader, Rating, CommentBody, CommentFooter } from "@/shared";
import { dateFormatWithHourAndMinutes } from "@/utils";
import { Review } from "../api/question";

const QuestionReviewItem = ({ review }: { review: Review }) => {
  return (
    <Comment>
      <CommentHeader
        profileImage=""
        userName={review.name}
        userCommentDetail={`후기 ${review.rateAverage} | 평균 별점 ${review.rateAverage}`}
        isCreator={review.isCreator}
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
