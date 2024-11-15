import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { Question } from "./types";

function useQuestionDetailApi(questionId: number) {
  return useQuery({
    queryKey: ["questionDetail", questionId],
    queryFn: () =>
      httpClient<Question>({
        method: "GET",
        url: `/hub/question/${questionId}`,
      }),
  });
}

export { useQuestionDetailApi };
