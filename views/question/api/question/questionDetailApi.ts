import { httpClient } from "@/providers";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { QuestionDetailResponse } from "./types";

function useQuestionDetailApi(questionId: number) {
  return useQuery({
    queryKey: ["questionDetail", questionId],
    queryFn: () =>
      httpClient<QuestionDetailResponse>({
        method: "GET",
        url: `/store/product/${questionId}`,
      }),
  });
}

export { useQuestionDetailApi };
