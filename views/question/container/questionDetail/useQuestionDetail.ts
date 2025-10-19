import { useParams } from "next/navigation";
import { useQuestionDetailApi } from "../../api/question";

const useQuestionDetail = () => {
  const { questionId } = useParams();

  const {
    data: questionDetailData,
    error: questionDetailError,
    isLoading: questionDetailIsLoading,
  } = useQuestionDetailApi(Number(questionId));

  return { questionDetailData: questionDetailData?.productDetail, questionDetailIsLoading };
};

export { useQuestionDetail };
