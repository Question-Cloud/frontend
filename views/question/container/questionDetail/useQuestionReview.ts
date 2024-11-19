import { useParams, useSearchParams } from "next/navigation";
import { useQuestionReviewApi } from "../../api/question";
import { useEffect, useState } from "react";
import { createQueryString } from "@/utils";
import { useNavigator } from "@/hooks";
import { REVIEW_PER_PAGE } from "@/constants";

const useQuestionReview = () => {
  const { handleQueryString } = useNavigator();
  const { questionId } = useParams();
  const searchParams = useSearchParams();

  const pageParams = searchParams.get("page") ?? 1;

  const [totalReviewCount, setTotalReviewCount] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const queryString = createQueryString({
      page: pageParams,
    });

    handleQueryString(queryString);
    setCurrentPage(Number(pageParams));
  }, [pageParams]);

  const { data: questionReviewData, isLoading: questionReviewIsLoading } = useQuestionReviewApi({
    questionId: Number(questionId),
    page: Number(pageParams),
    size: REVIEW_PER_PAGE,
  });

  useEffect(() => {
    if (questionReviewData) {
      setTotalReviewCount(questionReviewData.total);
    }
  }, [questionReviewData]);

  const handleCurrentPage = (page: number) => {
    const queryString = createQueryString({
      page: page,
    });

    handleQueryString(queryString);
    setCurrentPage(page);
  };

  return {
    questionReviewData: questionReviewData?.result,
    questionReviewIsLoading,
    totalReviewCount,
    currentPage,
    handleCurrentPage,
  };
};

export { useQuestionReview };
