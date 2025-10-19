import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionReviewRequest, QuestionReviewResponse } from "./types";
import { filterEmptyParams } from "@/utils";

function useQuestionReviewApi(params: QuestionReviewRequest) {
  const filteredParams = filterEmptyParams(params);

  return useQuery({
    queryKey: ["questionReview", params.page],
    queryFn: () =>
      httpClient<QuestionReviewResponse>({
        method: "GET",
        url: `/store/review`,
        params: filteredParams,
      }),
  });
}

export { useQuestionReviewApi };
