import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { QuestionListResponse, QuestionRequest } from "./types";
import { filterEmptyParams } from "@/utils";

function useQuestionListApi(params: QuestionRequest, isSearchClick: boolean) {
  const filteredParams = filterEmptyParams(params);

  return useQuery({
    queryKey: ["questionList", isSearchClick, params.page, params.sort],
    queryFn: () =>
      httpClient<QuestionListResponse>({
        method: "GET",
        url: `/store/product`,
        params: filteredParams,
      }),
  });
}

export { useQuestionListApi };
