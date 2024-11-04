import { httpClient } from "@/providers";
import { useQuery } from "@tanstack/react-query";
import { CategoryList } from "./types";

function useCategoryApi() {
  return useQuery({
    queryKey: ["categoryList"],
    queryFn: () =>
      httpClient<CategoryList>({
        method: "GET",
        url: `/question/category`,
      }),
  });
}

export { useCategoryApi };
