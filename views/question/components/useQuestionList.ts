import { useFilter } from "@/shared";
import { useQuestionListApi } from "@/shared/api";
import { useParams } from "next/navigation";

const useQuestionList = () => {
  const { type } = useParams();
  const { selectedSubUnitsId, selectedLevels } = useFilter();

  const categoriesString = selectedSubUnitsId.join(",");
  const levelsString = selectedLevels.join(",");

  const { data: questionListData, refetch: questionListRefetch } = useQuestionListApi({
    categories: categoriesString === "" ? [] : categoriesString,
    levels: levelsString === "" ? [] : levelsString,
    questionType: type === "self-made" ? "SelfMade" : "Past",
    //sort: "Popularity" | "Rate" | "Latest" | "LEVEL",
    sort: "Popularity",
    page: 1,
    size: 12,
  });

  return { questionListData, questionListRefetch };
};

export { useQuestionList };
