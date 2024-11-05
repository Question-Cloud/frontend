import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionList, QuestionRequest } from "./types";

function useQuestionListApi(params: QuestionRequest) {
  return useQuery({
    queryKey: ["questionList"],
    queryFn: () =>
      httpClient<QuestionList>({
        method: "GET",
        url: `/question`,
        params: params,
      }),
  });
}

export { useQuestionListApi };
