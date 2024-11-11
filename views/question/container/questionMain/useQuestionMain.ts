import { useFilter } from "@/shared";
import { useQuestionListApi } from "@/shared/api";
import { useParams } from "next/navigation";

const useQuestionMain = () => {
  const { type } = useParams();
  const { selectedSubUnitsId, selectedLevels } = useFilter();
  const { data: questionListData, error: questionListError } = useQuestionListApi({
    categories: selectedSubUnitsId,
    levels: selectedLevels,
    questionType: type === "self-made" ? "SelfMade" : "Past",
    //sort: "Popularity" | "Rate" | "Latest" | "LEVEL",
    sort: "Popularity",
    page: 1,
    size: 12,
  });

  return { questionListData };
};

export { useQuestionMain };
