import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionList, QuestionRequest } from "./types";

function useQuestionListApi(params: QuestionRequest) {
  console.log(params);
  return useQuery({
    queryKey: ["questionList", JSON.stringify(params)],
    queryFn: () =>
      httpClient<QuestionList>({
        method: "GET",
        url: `/hub/question`,
        params: params,
      }),
  });
}

export { useQuestionListApi };
