import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionList, QuestionRequest } from "./types";
import { filterEmptyParams } from "@/utils";

function useQuestionListApi(params: QuestionRequest, isSearchClick: boolean) {
  const filteredParams = filterEmptyParams(params);

  return useQuery({
    queryKey: ["questionList", isSearchClick, params.page],
    queryFn: () =>
      httpClient<QuestionList>({
        method: "GET",
        url: `/hub/question`,
        params: filteredParams,
      }),
  });
}

export { useQuestionListApi };
