import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionReviewRequest, QuestionReviews } from "./types";
import { filterEmptyParams } from "@/utils";

function useQuestionReviewApi(params: QuestionReviewRequest) {
  const filteredParams = filterEmptyParams(params);

  return useQuery({
    queryKey: ["questionReview", params.page],
    queryFn: () =>
      httpClient<QuestionReviews>({
        method: "GET",
        url: `/hub/question/review`,
        params: filteredParams,
      }),
  });
}

export { useQuestionReviewApi };
