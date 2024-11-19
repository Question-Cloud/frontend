import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionDetail } from "./types";

function useQuestionDetailApi(questionId: number) {
  return useQuery({
    queryKey: ["questionDetail", questionId],
    queryFn: () =>
      httpClient<QuestionDetail>({
        method: "GET",
        url: `/hub/question/${questionId}`,
      }),
  });
}

export { useQuestionDetailApi };
